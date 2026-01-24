import { watch } from 'node:fs';
import { join } from 'node:path';

const PORT = 3000;
const srcDir = './src';
const publicDir = './public';

// Track connected clients for hot reload
const clients = new Set<ServerWebSocket<unknown>>();

function log(message: string) {
  console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
}

// Watch for file changes
function startWatcher() {
  const watcher = watch(srcDir, { recursive: true }, (eventType, filename) => {
    if (filename) {
      log(`File changed: ${filename}`);
      // Notify all connected clients to reload
      clients.forEach((client) => {
        client.send(JSON.stringify({ type: 'reload' }));
      });
    }
  });

  log('👀 Watching for file changes...');
  return watcher;
}

// Serve files
const server = Bun.serve({
  port: PORT,
  async fetch(req, server) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Handle WebSocket upgrade for hot reload
    if (path === '/__hmr') {
      const upgraded = server.upgrade(req);
      if (upgraded) {
        return undefined;
      }
      return new Response('WebSocket upgrade failed', { status: 500 });
    }

    // Default to index.html
    if (path === '/') {
      path = '/index.html';
    }

    // Serve from public directory for HTML
    if (path.endsWith('.html')) {
      const file = Bun.file(join(publicDir, path));
      if (await file.exists()) {
        // Inject hot reload script
        let html = await file.text();
        const hotReloadScript = `
<script>
  (function() {
    const ws = new WebSocket('ws://localhost:${PORT}/__hmr');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'reload') {
        console.log('🔄 Hot reload triggered');
        location.reload();
      }
    };
    ws.onopen = () => console.log('🔌 Hot reload connected');
    ws.onerror = () => console.log('❌ Hot reload disconnected');
  })();
</script>
</body>`;
        html = html.replace('</body>', hotReloadScript);
        return new Response(html, {
          headers: { 'Content-Type': 'text/html' },
        });
      }
    }

    // Serve TypeScript/JavaScript files - bundle on the fly
    if (path.endsWith('.js') || path.endsWith('.ts')) {
      const entryPoint = path === '/index.js' ? join(srcDir, 'index.ts') : join(srcDir, path);

      try {
        const result = await Bun.build({
          entrypoints: [entryPoint],
          format: 'esm',
          target: 'browser',
          minify: false,
          sourcemap: 'inline',
          loader: {
            '.css': 'text', // Import CSS files as text strings
          },
        });

        if (result.success) {
          const output = result.outputs[0];
          return new Response(await output.text(), {
            headers: { 'Content-Type': 'application/javascript' },
          });
        }
      } catch (err) {
        console.error('Build error:', err);
        return new Response(`console.error('Build failed:', ${JSON.stringify(String(err))})`, {
          headers: { 'Content-Type': 'application/javascript' },
        });
      }
    }

    // Serve CSS files
    if (path.endsWith('.css')) {
      const file = Bun.file(join(srcDir, path));
      if (await file.exists()) {
        return new Response(file, {
          headers: { 'Content-Type': 'text/css' },
        });
      }
    }

    return new Response('Not found', { status: 404 });
  },

  websocket: {
    open(ws) {
      clients.add(ws);
      log(`Client connected (${clients.size} total)`);
    },
    close(ws) {
      clients.delete(ws);
      log(`Client disconnected (${clients.size} total)`);
    },
    message() {},
  },
});

// Start file watcher
startWatcher();

log(`🚀 Dev server running at http://localhost:${PORT}`);
log(`📁 Serving from ${publicDir} and ${srcDir}`);

// Handle WebSocket upgrade for hot reload
if (server.upgrade) {
  log('✨ Hot reload enabled');
}

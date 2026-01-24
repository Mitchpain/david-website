import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const distDir = './dist';
const publicDir = './public';
const srcDir = './src';

async function build() {
  console.log('🔨 Building production bundle...\n');

  // Clean dist directory
  if (existsSync(distDir)) {
    rmSync(distDir, { recursive: true });
  }
  mkdirSync(distDir, { recursive: true });
  mkdirSync(join(distDir, 'styles'), { recursive: true });

  // Build TypeScript with esbuild
  await esbuild.build({
    entryPoints: [join(srcDir, 'index.ts')],
    bundle: true,
    minify: true,
    format: 'esm',
    target: 'es2020',
    outfile: join(distDir, 'index.js'),
    sourcemap: false,
    treeShaking: true,
    loader: {
      '.css': 'text', // Import CSS files as text strings
    },
  });

  console.log('✅ JavaScript bundled');

  // Copy CSS
  copyFileSync(
    join(srcDir, 'styles', 'main.css'),
    join(distDir, 'styles', 'main.css')
  );
  console.log('✅ CSS copied');

  // Copy HTML
  copyFileSync(
    join(publicDir, 'index.html'),
    join(distDir, 'index.html')
  );
  console.log('✅ HTML copied');

  console.log('\n✨ Build complete! Output in ./dist/');
}

build().catch((err) => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});

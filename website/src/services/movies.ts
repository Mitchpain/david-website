import type { FilmMedia } from '../components/film-item/film-item.ts';

export interface Movie {
  title: string;
  media: FilmMedia;
  href: string;
}

const filmPageMovies: Movie[] = [
  {
    title: 'Fragments',
    media: {
      type: 'video',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    href: 'fragments.html'
  },
  {
    title: 'Light & Shadow',
    media: {
      type: 'images',
      imageUrls: [
        'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1574437553126-7fc8e0bb0e1e?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=600&fit=crop'
      ]
    },
    href: 'light-shadow.html'
  },
  {
    title: 'Urban Stories',
    media: {
      type: 'images',
      imageUrls: [
        'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop'
      ]
    },
    href: 'urban-stories.html'
  },
  {
    title: 'Horizon',
    media: {
      type: 'video',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    },
    href: 'horizon.html'
  },
  {
    title: 'Noir',
    media: {
      type: 'images',
      imageUrls: [
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&h=600&fit=crop'
      ]
    },
    href: '#'
  }
];

const commercialPageMovies: Movie[] = [
  {
    title: 'Brand Stories',
    media: {
      type: 'video',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    },
    href: 'brand-stories.html'
  },
  {
    title: 'Product Launch',
    media: {
      type: 'images',
      imageUrls: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=600&fit=crop'
      ]
    },
    href: 'product-launch.html'
  },
  {
    title: 'Fashion Forward',
    media: {
      type: 'images',
      imageUrls: [
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558769132-cb1aea1f1c65?w=600&h=600&fit=crop'
      ]
    },
    href: 'fashion-forward.html'
  },
  {
    title: 'Tech Vision',
    media: {
      type: 'video',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    },
    href: 'tech-vision.html'
  }
];

const archivePageMovies: Movie[] = [
  {
    title: 'Early Works',
    media: {
      type: 'images',
      imageUrls: [
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop'
      ]
    },
    href: 'early-works.html'
  },
  {
    title: 'Experimental',
    media: {
      type: 'video',
      videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
    },
    href: 'experimental.html'
  },
  {
    title: 'Student Films',
    media: {
      type: 'images',
      imageUrls: [
        'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&h=600&fit=crop'
      ]
    },
    href: 'student-films.html'
  }
];

export type PageType = 'film' | 'commercial' | 'archive';

export async function getMoviesForPage(page: PageType): Promise<Movie[]> {
  // TODO: Replace with actual CMS fetch when ready
  // const response = await fetch(`https://your-cms.com/api/pages/${page}`);
  // const data = await response.json();
  // return data.movies;

  // Mock delay to simulate API call
  await new Promise(resolve => setTimeout(resolve, 0));

  switch (page) {
    case 'film':
      return filmPageMovies;
    case 'commercial':
      return commercialPageMovies;
    case 'archive':
      return archivePageMovies;
    default:
      return filmPageMovies;
  }
}

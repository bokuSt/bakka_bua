
import { Product, Game, Article } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Quantum Precision Mouse',
    price: 89.99,
    category: 'Electronics',
    description: 'Ultra-fast response with 25k DPI sensor.',
    image: 'https://picsum.photos/seed/mouse/400/300'
  },
  {
    id: 'p2',
    name: 'Luminal Keyboard Pro',
    price: 159.99,
    category: 'Electronics',
    description: 'Mechanical keys with customizable RGB backlighting.',
    image: 'https://picsum.photos/seed/keyboard/400/300'
  },
  {
    id: 'p3',
    name: 'ErgoFlow Office Chair',
    price: 249.99,
    category: 'Furniture',
    description: 'Sustainable materials meeting ergonomic perfection.',
    image: 'https://picsum.photos/seed/chair/400/300'
  },
  {
    id: 'p4',
    name: 'SolarCharge Backpack',
    price: 110.00,
    category: 'Accessories',
    description: 'Charge your devices on the go with integrated solar panels.',
    image: 'https://picsum.photos/seed/bag/400/300'
  }
];

export const GAMES: Game[] = [
  {
    id: 'g1',
    title: 'Void Runner',
    genre: 'Arcade',
    difficulty: 'Hard',
    players: 1024,
    image: 'https://picsum.photos/seed/void/400/300'
  },
  {
    id: 'g2',
    title: 'Neon Nexus',
    genre: 'RPG',
    difficulty: 'Medium',
    players: 540,
    image: 'https://picsum.photos/seed/neon/400/300'
  },
  {
    id: 'g3',
    title: 'Cipher Master',
    genre: 'Puzzle',
    difficulty: 'Easy',
    players: 89,
    image: 'https://picsum.photos/seed/cipher/400/300'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'The Future of AI in Architecture',
    author: 'Elena Vance',
    date: 'Oct 24, 2024',
    category: 'Tech',
    excerpt: 'How generative models are reshaping urban planning.',
    content: 'Generative AI is not just for text. Architects are using specialized models to optimize daylight, airflow, and structural integrity in record time...',
    image: 'https://picsum.photos/seed/arch/800/400'
  },
  {
    id: 'a2',
    title: 'Sustainable Living in Mega-Cities',
    author: 'Marcus Thorne',
    date: 'Oct 22, 2024',
    category: 'Lifestyle',
    excerpt: 'Small changes that make a big impact in high-density areas.',
    content: 'Living in a concrete jungle doesn\'t mean you can\'t be green. From vertical gardens to community composting, the movement is growing...',
    image: 'https://picsum.photos/seed/green/800/400'
  }
];

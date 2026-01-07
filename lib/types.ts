
export type PlatformType = 'MARKET' | 'GAMER' | 'LAMP' | 'HOME' | 'CHECKOUT';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface Game {
  id: string;
  title: string;
  genre: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  players: number;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  level: number;
  xp: number;
  orders: string[];
}

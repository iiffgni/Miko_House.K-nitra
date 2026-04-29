export type Language = 'fr' | 'ar';

export interface MenuItem {
  id: string;
  name: { [key in Language]: string };
  description: { [key in Language]: string };
  price: number;
  image: string;
}

export interface MenuCategory {
  id: string;
  title: { [key in Language]: string };
  items: MenuItem[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: { [key in Language]: string };
  date: string;
}

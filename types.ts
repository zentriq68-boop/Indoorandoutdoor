export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  isHot?: boolean;
  discount?: number;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

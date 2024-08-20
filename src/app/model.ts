export interface Dessert {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export type ImageSize = 'thumbnail' | 'mobile' | 'tablet' | 'desktop';

export interface CartProduct {
  product: Dessert;
  quantity: number;
}
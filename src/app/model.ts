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
// export interface Dessert {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }

export type ImageSize = 'thumbnail' | 'mobile' | 'tablet' | 'desktop';

export interface CartProduct {
  product: Dessert;
  quantity: number;
}

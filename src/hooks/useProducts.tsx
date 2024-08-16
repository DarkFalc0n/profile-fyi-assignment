export interface Product {
  id: string;
  title: string;
  price: number;
  rating: {
    average: number;
    count: number;
  };
  image?: string;
}


export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  products: Product[];
}

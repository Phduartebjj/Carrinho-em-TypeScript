interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

interface CartProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
}

export type { Product, CartProduct };

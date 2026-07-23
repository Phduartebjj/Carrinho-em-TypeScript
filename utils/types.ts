interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

interface Receipt {
  id: string;
  date?: string;
  total: number;
  products: CartProduct[];
}

interface CartProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  quantity: number;
}

type localStorage = Product[] | CartProduct[];

export type { Product, CartProduct, localStorage, Receipt };

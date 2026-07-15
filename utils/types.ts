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

type localStorage = Product[] | CartProduct[]

export type { Product, CartProduct,localStorage };

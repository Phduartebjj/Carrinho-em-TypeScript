import { randomUUID } from "crypto";
import type { Product } from "./types.ts";

let products: Product[] = [];

function getProducts(): Product[] {
  return products;
}

function createProduct(
  name: string,
  price: number,
  category: string,
  stock: number,
): Product {
  const product: Product = {
    id: randomUUID(),
    name: name,
    price: price,
    category: category,
    stock: stock,
  };
  return product;
}

function saveProduct(p: Product):void{
    products.push(p)
}

export {getProducts, createProduct,saveProduct}

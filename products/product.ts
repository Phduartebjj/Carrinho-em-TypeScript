import { randomUUID } from "crypto";
import type { Product } from "./types.ts";
import { saveProductsInStorage } from "../storage/storage.js";

let products: Product[] = [];

function getProducts(): Product[] {
  return products;
}

function setProducts(newProducts:Product[]):void{
    products = newProducts
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

async function saveProduct(p: Product):Promise<void>{
    products.push(p)
    await saveProductsInStorage(products)
}

export {getProducts,setProducts, createProduct,saveProduct}

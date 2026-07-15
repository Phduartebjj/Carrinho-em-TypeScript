import { randomUUID } from "crypto";
import type { Product } from "./types.ts";
import { saveProductsInStorage } from "../storage/storage.js";

let products: Product[] = [];

function getProducts(): Product[] {
  return products;
}

function setProducts(newProducts: Product[]): void {
  products = newProducts;
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

async function saveProduct(p: Product): Promise<void> {
  products.push(p);
  await saveProductsInStorage(products);
}

async function editProduct(
  name: string,
  price: number,
  category: string,
  stock: number,
  indexP: number,
): Promise<void> {
  let editP: any = getProducts().find((p, i) => i === indexP - 1);
  editP.name = name;
  editP.price = price;
  editP.price = price;
  editP.category = category;
  editP.stock = stock;
  await saveProductsInStorage(products);
}

async function removeProduct(indexP:number): Promise<void> {
  let removeP: any = getProducts().find((p, i) => i !== indexP - 1);
  setProducts(getProducts().filter(p => p.id !== removeP.id))
  await saveProductsInStorage(products)
}

export { getProducts, setProducts, createProduct, saveProduct, editProduct,removeProduct };

import { randomUUID } from "node:crypto";
import type { Product } from "../utils/types.js";
import { saveProductsInStorage } from "../storage/storage.js";
import { erroFindProduct } from "../ui.js";

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
  let editP = getProducts().find((p, i) => i === indexP - 1);

  if (!editP) {
    erroFindProduct();
    return;
  }

  editP.name = name;
  editP.price = price;
  editP.price = price;
  editP.category = category;
  editP.stock = stock;
  await saveProductsInStorage(products);
}

async function removeProduct(indexP: number): Promise<void> {
  setProducts(getProducts().filter((p, i) => i !== indexP - 1));
  await saveProductsInStorage(products);
}

function searchProduct(searchName: string):Product[] {
  const searchProduct = getProducts().filter((p) =>
    p.name.toLowerCase().includes(searchName.toLowerCase()),
  );
  
  return searchProduct

}

export {
  getProducts,
  setProducts,
  createProduct,
  saveProduct,
  editProduct,
  removeProduct,
  searchProduct,
};

import { readFile, writeFile } from "fs/promises";
import { setProducts } from "../products/product.js";
import type { CartProduct, Product, Receipt } from "../utils/types.js";
import { setCartProducts } from "../cart/cart.js";
import {
  addReceipt,
  createReceipt,
  getReceipts,
  setReceipts,
} from "./receipt.js";
const productsFilePath = "./data/products.json";
const cartFilePath = "./data/cart.json";
const receiptPath = "./data/receipt.json";

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const data = await readFile(file, "utf-8");
    return JSON.parse(data) as T;
  } catch {
    return fallback;
  }
}

async function loadStorageCart(): Promise<void> {
  const cartProducts = await readJson<CartProduct[]>(cartFilePath, []);

  setCartProducts(cartProducts);
}

async function loadStorage(): Promise<void> {
  const products = await readJson<Product[]>(productsFilePath, []);

  setProducts(products);
}

async function saveProductsInStorage(products: Product[]): Promise<void> {
  await writeFile(productsFilePath, JSON.stringify(products, null, 2), "utf-8");
}

async function saveCartInStorage(cart: CartProduct[]): Promise<void> {
  await writeFile(cartFilePath, JSON.stringify(cart, null, 2), "utf-8");
}

async function loadReceipt(): Promise<void> {
  const receipts = await readJson<Receipt[]>(receiptPath, []);
  setReceipts(receipts);
}

async function saveReceipt(): Promise<void> {
  addReceipt(createReceipt());
  await writeFile(receiptPath, JSON.stringify(getReceipts(), null, 2), "utf-8");
}

export {
  saveProductsInStorage,
  loadStorage,
  loadStorageCart,
  saveCartInStorage,
  saveReceipt,
  loadReceipt,
};

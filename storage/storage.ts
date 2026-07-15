import { readFile, writeFile } from "fs/promises";
import { setProducts } from "../products/product.js";
import type { CartProduct, Product } from "../utils/types.js";
const productsFilePath = "./data/products.json";
const cartFilePath = ".data/cart.json"

async function readJson(
  file: string,
  fallback: Product[] = [],
): Promise<Product[]> {
  try {
    const data = await readFile(file, "utf-8");
    return JSON.parse(data) as Product[];
  } catch {
    return fallback;
  }
}

async function loadStorageCart() {
  const cartProducts = await readJson(
        cartFilePath,
        []
    );

    setProducts(cartProducts);
}

async function loadStorage(): Promise<void> {
    const products = await readJson(
        productsFilePath,
        []
    );

    setProducts(products);
}

async function saveProductsInStorage(products: Product[]): Promise<void> {
  await writeFile(
    productsFilePath,
    JSON.stringify(products, null, 2),
    "utf-8",
  );
}

async function saveCartInStorage(cart: CartProduct[]):Promise<void>{
  await writeFile(
    cartFilePath,
    JSON.stringify(cart, null, 2),
    "utf-8",
  );
}


export { saveProductsInStorage, loadStorage,loadStorageCart,saveCartInStorage };

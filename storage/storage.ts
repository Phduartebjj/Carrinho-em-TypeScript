import { readFile, writeFile } from "fs/promises";
import { setProducts } from "../products/product.js";
import type { Product } from "../products/types.ts";
const productsFilePath = "./data/products.json";

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


export { saveProductsInStorage, loadStorage };

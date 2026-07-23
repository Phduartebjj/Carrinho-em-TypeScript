import { randomUUID } from "node:crypto";
import type { Receipt } from "../utils/types.js";
import { getCartProducts, totalValueCart } from "../cart/cart.js";

let receipts: Receipt[] = [];

function getReceipts(): Receipt[] {
  return receipts;
}

function createReceipt(): Receipt {
  return {
    id: randomUUID(),
    date: new Date().toLocaleString("pt-BR"),
    total: totalValueCart(),
    products: getCartProducts().map((p) => ({ ...p })),
  };
}

function addReceipt(p: Receipt): void {
  receipts.push(p);
}

function setReceipts(receipt: Receipt[]): void {
  receipts = receipt;
}

export { getReceipts, setReceipts, addReceipt, createReceipt };

import type { Product, CartProduct } from "../utils/types.js";
import {
  saveCartInStorage,
  saveProductsInStorage,
} from "../storage/storage.js";
import { addStock, getProducts, removeStock } from "../products/product.js";
import { erroFindProduct } from "../ui.js";

let cartProducts: CartProduct[] = [];

function getCartProducts(): CartProduct[] {
  return cartProducts;
}

function setCartProducts(products: CartProduct[]): void {
  cartProducts = products;
}

function saveCartProducts(p: CartProduct): void {
  cartProducts.push(p);
}

async function addCartProduct(indexP: number): Promise<void> {
  const productFind = findProductByIndex(indexP);

  if (!productFind) {
    erroFindProduct();
    return;
  }

  const cartProductFind = findCartProductById(productFind.id);

  if (cartProductFind) {
    cartProductFind.quantity++;
    removeStock(productFind);
  } else {
    saveCartProducts(createProductToCart(productFind));
    removeStock(productFind);
  }
  await saveProductsInStorage(getProducts());
  await saveCartInStorage(cartProducts);
}

function createProductToCart(p: Product): CartProduct {
  const product: CartProduct = {
    id: p.id,
    name: p.name,
    price: p.price,
    category: p.category,
    quantity: 1,
  };

  return product;
}

async function removeCartProduct(indexP: number): Promise<void> {
  let productRemove = getCartProducts()[indexP - 1];

  if (!productRemove) {
    erroFindProduct();
    return;
  }

  if (productRemove.quantity > 1) {
    productRemove.quantity--;
    addStock(productRemove);
  } else {
    setCartProducts(getCartProducts().filter((p, i) => i !== indexP - 1));
    addStock(productRemove);
  }

  await saveProductsInStorage(getProducts());
  await saveCartInStorage(cartProducts);
}

async function cleanCart(): Promise<void> {
  getCartProducts().forEach((cP) => {
    addStock(cP, cP.quantity);
  });
  setCartProducts([]);
  await saveProductsInStorage(getProducts());
  await saveCartInStorage(cartProducts);
}

function findCartProductById(id: string): CartProduct | undefined {
  return cartProducts.find((product) => product.id === id);
}

function findProductByIndex(index: number): Product | undefined {
  return getProducts()[index - 1];
}

export {
  getCartProducts,
  addCartProduct,
  setCartProducts,
  removeCartProduct,
  cleanCart,
};

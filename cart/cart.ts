import type { Product, CartProduct } from "../utils/types.js";
import { saveCartInStorage } from "../storage/storage.js";
import { getProducts } from "../products/product.js";
import { erroFindProduct } from "../ui.js";

let cartProducts: CartProduct[] = [];

function getCartProducts(): CartProduct[] {
  return cartProducts;
}

function setCartProducts(a: CartProduct[]): void {
  cartProducts = a;
}

function saveCartProducts(p: CartProduct): void {
  cartProducts.push(p);
}

async function addCartProduct(indexP: number): Promise<void> {
  let productFind = getProducts().find((p, i) => i === indexP - 1);

  if(!productFind){
    erroFindProduct()
    return
  }
  
  let cartProductFind = cartProducts.find(
    (cP) => cP.id === productFind.id,
  );
  if (cartProductFind) {
    cartProductFind.quantity++;
  } else {
    saveCartProducts(createProductToCart(productFind));
  }
  await saveCartInStorage(cartProducts);
}

function createProductToCart(p: Product): CartProduct {
  let product: CartProduct = {
    id: p.id,
    name: p.name,
    price: p.price,
    category: p.category,
    quantity: 1,
  };

  return product;
}

export { getCartProducts, addCartProduct, setCartProducts };

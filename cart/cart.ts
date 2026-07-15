import type { Product, CartProduct } from "../utils/types.js";
import { saveCartInStorage } from "../storage/storage.js";

let cartProducts: CartProduct[] = [];

function getCartProducts(): CartProduct[] {
  return cartProducts;
}

function setCartProducts(a: CartProduct[]): void {
  cartProducts = a;
}

function saveCartProducts(p:CartProduct):void{
    cartProducts.push(p)
}

async function addCartProduct(p: Product): Promise<void> {
  let productFind:any = cartProducts.find(cP => cP.id === p.id)
  if(productFind){
    productFind.quantity++
  }else{
    saveCartProducts(createProductToCart(p))
  }
  await saveCartInStorage(cartProducts)
}

function createProductToCart(p: Product): CartProduct {
  let product: CartProduct = {
    id: p.id,
    name: p.name,
    price: p.price,
    category: p.category,
    quantity: 1,
  };

  return product
}

export {getCartProducts, addCartProduct}
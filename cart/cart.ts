import type { Product } from "../utils/types.js"

let cartProducts:Product[] = []

function getCartProducts():Product[]{
    return cartProducts
}

function setCartProducts(a:Product[]):void{
    cartProducts = a
}




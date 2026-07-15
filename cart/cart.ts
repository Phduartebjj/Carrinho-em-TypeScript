import type { Product } from "../utils/types.js"
import { getProducts } from "../products/product.js"

let cartProducts:Product[] = []

function getCartProducts():Product[]{
    return cartProducts
}

function setCartProducts(a:Product[]):void{
    cartProducts = a
}

function addCartProduct(p:Product):void{
    
}


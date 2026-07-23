import { getCartProducts, totalValueCart } from "./cart/cart.js";
import { getProducts } from "./products/product.js";
import { getReceipts } from "./storage/receipt.js";
import { loadReceipt } from "./storage/storage.js";
import type { Product } from "./utils/types.js";

function showOptionsCatalog(): void {
  console.log("======== CATÁLOGO ========");
  console.log("===== 1.Ver Produtos");
  console.log("===== 2.Cadastrar Produto");
  console.log("===== 3.Editar Produto");
  console.log("===== 4.Remover Produto");
  console.log("===== 5.Buscar Produto");
  console.log("======== CARRINHO ========");
  console.log("===== 6.Ver Carrinho");
  console.log("===== 7.Remover Produto do Carrinho");
  console.log("===== 8.Limpar Carrinho");
  console.log("===== 9.Sair do Program");
  console.log("=========================");
}

function erroFindProduct(): void {
  console.log("Produto não encontrado");
}

function showProducts(): void {
  getProducts().forEach((p, i) => {
    console.log(
      `${i + 1}. Nome: ${p.name}\n Preço: ${p.price}\n Estoque: ${p.stock}\n Categoria:${p.category}`,
    );
  });
}

function showTotalCart(): void {
  console.log(`\n Valor total: R$${totalValueCart()}`);
}

function alertCartProducts(): void {
  console.log("Carrinho está vazio");
}

function showCartProducts(): void {
  getCartProducts().forEach((p, i) => {
    console.log(
      `${i + 1}. Nome: ${p.name}\n Preço: ${p.price}\n Quantidade: ${p.quantity}\n Categoria:${p.category}`,
    );
  });
}

async function showReceipt(): Promise<void> {
  getReceipts().forEach((receipt, i) => {
    console.log(`===== Recibo ${i + 1} =====`);
    console.log(`ID: ${receipt.id}`);
    console.log(`Total: R$${receipt.total}`);

    receipt.products.forEach((p) => {
      console.log(`${p.name} \n Quantidade: ${
        p.quantity
      } \n Preço: R$${p.price} 
      `);
    });
  });
}

function showFinishProgram(): void {
  console.log("===== Fim do Carrinho =====");
}

function showSearchProducts(searchProducts: Product[]): void {
  searchProducts.forEach((p, i) => {
    console.log(
      `\n ${i + 1}. Nome: ${p.name}\n Preço: ${p.price}\n Quantidade: ${p.stock}\n Categoria:${p.category} \n`,
    );
  });
}

export {
  showOptionsCatalog,
  showProducts,
  showFinishProgram,
  showCartProducts,
  erroFindProduct,
  showSearchProducts,
  alertCartProducts,
  showTotalCart,
  showReceipt,
};

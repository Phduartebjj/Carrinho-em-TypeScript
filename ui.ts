import { getProducts } from "./products/product.js";

function showOptionsCatalog(): void {
  console.log("======== CATÁLOGO ========");
  console.log("===== 1.Ver Produtos");
  console.log("===== 2.Cadastrar Produto");
  console.log("===== 3.Editar Produto");
  console.log("===== 4.Remover Produto");
  console.log("======== CARRINHO ========");
  console.log("===== 5.Ver Carrinho");
  console.log("===== 9.Sair do Program");
  console.log("=========================");
}

function showProducts(): void {
  getProducts().forEach((p,i) => {
    console.log(
      `${i+1}. Nome: ${p.name}\n Preço: ${p.price}\n Quantidade: ${p.stock}\n Categoria:${p.category}`,
    );
  });
}

function showFinishProgram():void{
  console.log("===== Fim do Carrinho")
}

export { showOptionsCatalog, showProducts,showFinishProgram };

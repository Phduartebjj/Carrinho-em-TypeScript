import { getProducts } from "./products/product.js";

function showOptionsCatalog(): void {
  console.log("======== CATÁLOGO ========");
  console.log("===== 1.Ver Produtos");
  console.log("===== 2.Cadastrar Produtos");
  console.log("===== 3.Editar Produtos");
  console.log("=========================");
}

function showProducts(): void {
  getProducts().forEach((p,i) => {
    console.log(
      `${i+1}. Nome: ${p.name}\n Preço: ${p.price}\n Quantidade: ${p.stock}\n Categoria:${p.category}`,
    );
  });
}

export { showOptionsCatalog, showProducts };

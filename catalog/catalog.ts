import promptSync from "prompt-sync";
import {
  showOptionsCatalog,
  showProducts,
  showFinishProgram,
  showCartProducts,
} from "../ui.js";
import {
  askNumber,
  askString,
} from "../validation/validation.js";
import {
  createProduct,
  saveProduct,
  editProduct,
  removeProduct,
} from "../products/product.js";
import { addCartProduct } from "../cart/cart.js";

const prompt = promptSync();

let running: boolean = true;
let input: string | number;
let name: string;
let price: number;
let stock: number;
let category: string;

async function startCatalog(): Promise<void> {
  while (running) {
    showOptionsCatalog();
    let choice: number = Number(prompt("Qual número você deseja?"));

    switch (choice) {
      case 1: {
        showProducts();
        input = askNumber(
          "Digite o número do produto que você deseja comprar: ",
        );
        await addCartProduct(input);
        break;
      }
      case 2: {
        await registerProduct();
        break;
      }
      case 3: {
        showProducts();
        input = askNumber(
          "Digite o número do produto que você deseja editar: ",
        );
        await editCatalogProduct(input);

        break;
      }
      case 4: {
        showProducts();
        input = askNumber(
          "Digite o número do produto que você deseja remover: ",
        );
        await removeProduct(input);
        break;
      }

      case 5: {
        showCartProducts();
        break;
      }
      case 9: {
        showFinishProgram();
        running = false;
        break;
      }

      default: {
        running = false;
        break;
      }
    }
  }
}

async function registerProduct(): Promise<void> {
  name = askString("Nome: ");
  price = askNumber("Preço: ");
  category = askString("Categoria: ");
  stock = askNumber("Estoque: ");

  await saveProduct(createProduct(name, price, category, stock));
}

async function editCatalogProduct(index: number): Promise<void> {
  name = askString("Nome novo: ");
  price = askNumber("Preço novo: ");
  category = askString("Categoria novo: ");
  stock = askNumber("Estoque novo: ");

  await editProduct(name, price, category, stock, index);
}

export { startCatalog };

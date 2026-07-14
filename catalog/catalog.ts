import promptSync from "prompt-sync";
import { showOptionsCatalog, showProducts } from "../ui.js";
import { validationInputNumber,validationInputString } from "../validation/validation.js";
import { createProduct,saveProduct } from "../products/product.js";


const prompt = promptSync();

let running: boolean = true;
let input: string | number;
let name: string;
let price: number;
let stock: number;
let category: string;

function startCatalog(): void {
  while (running) {
    showOptionsCatalog();
    let choice: number = Number(prompt("Qual número você deseja?"));

    switch (choice) {
      case 1: {
        showProducts;
        break;
      }
      case 2: {
        registerProduct()
        break;
      }

      default: {
        running = false;
        break;
      }
    }
  }
}

function registerProduct(): void {
  input = prompt("Qual é o nome do produto que você deseja adicionar? ");
  if (!validationInputString(input)) {
    console.log("Nome inválido, digite outro nome");
    return;
  }
  name = input;

  input = Number(
    prompt("Qual é o preço do produto que você deseja adicionar? "),
  );
  if (!validationInputNumber(Number(input))) {
    console.log("Preço inválido");
    return;
  }
  price = input;

  input = Number(
    prompt("Qual é a quantidade do produto que você deseja adicionar? "),
  );
  if (!validationInputNumber(Number(input))) {
    console.log("Quantidade inválida");
    return;
  }
  stock = Number(input);

  input = prompt("Qual é a categoria do produto que você deseja adicionar? ");
  if (!validationInputString(input)) {
    console.log("Nome inválido, digite outro nome");
    return;
  }
  category = input;

  saveProduct(createProduct(name, price, category, stock));
}

export { startCatalog };

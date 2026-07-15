import promptSync from "prompt-sync";
import { showOptionsCatalog, showProducts } from "../ui.js";
import {
  validationInputNumber,
  validationInputString,
} from "../validation/validation.js";
import {
  createProduct,
  saveProduct,
  editProduct,
} from "../products/product.js";

const prompt = promptSync();

let running: boolean = true;
let input: string | number;
let name: string;
let price: number;
let stock: number;
let category: string;
let EditP: number;

async function startCatalog(): Promise<void> {
  while (running) {
    showOptionsCatalog();
    let choice: number = Number(prompt("Qual número você deseja?"));

    switch (choice) {
      case 1: {
        showProducts();
        break;
      }
      case 2: {
        await registerProduct();
        break;
      }
      case 3: {
        showProducts();
        input = Number(
          prompt("Digite o número do produto que você deseja editar: "),
        );
        if (!validationInputNumber(Number(input))) {
          console.log("Nome inválido, digite outro nome");
          return;
        }
        EditP = input;
        await editCatalogProduct(EditP);

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

  await saveProduct(createProduct(name, price, category, stock));
}

async function editCatalogProduct(index: number): Promise<void> {
  input = prompt("Novo nome: ");
  if (!validationInputString(input)) {
    console.log("Nome inválido, digite outro nome");
    return;
  }
  name = input;

  input = Number(prompt("Novo valor: "));
  if (!validationInputNumber(Number(input))) {
    console.log("Preço inválido");
    return;
  }
  price = input;

  input = Number(prompt("Nova quantidade: "));
  if (!validationInputNumber(Number(input))) {
    console.log("Quantidade inválida");
    return;
  }
  stock = Number(input);

  input = prompt("Nova Categoria: ");
  if (!validationInputString(input)) {
    console.log("Nome inválido, digite outro nome");
    return;
  }
  category = input;

  await editProduct(name, price, category, stock, index);
}

export { startCatalog };

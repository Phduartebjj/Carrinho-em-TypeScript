import promptSync from "prompt-sync";
import {
  showOptionsCatalog,
  showProducts,
  showFinishProgram,
  showCartProducts,
  showSearchProducts,
  alertCartProducts,
  showTotalCart,
  showReceipt,
} from "../ui.js";
import { askNumber, askString } from "../validation/validation.js";
import {
  createProduct,
  saveProduct,
  editProduct,
  removeProduct,
  getProducts,
  searchProduct,
} from "../products/product.js";
import {
  addCartProduct,
  cleanCart,
  finishShopping,
  getCartProducts,
  removeCartProduct,
  totalValueCart,
} from "../cart/cart.js";
import { loadReceipt } from "../storage/storage.js";

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
    let choice: number = askNumber("Qual número você deseja? ");

    switch (choice) {
      case 1: {
        showProducts();
        if (getProducts().length > 0) {
          input = askNumber(
            "Digite o número do produto que você deseja comprar: ",
          );
          await addCartProduct(input);
        }
        break;
      }
      case 2: {
        await registerProduct();
        break;
      }
      case 3: {
        showProducts();
        if (getProducts().length > 0) {
          input = askNumber(
            "Digite o número do produto que você deseja editar: ",
          );
          await editCatalogProduct(input);
        }

        break;
      }
      case 4: {
        showProducts();
        if (getProducts().length > 0) {
          input = askNumber(
            "Digite o número do produto que você deseja remover: ",
          );
          await removeProduct(input);
        }
        break;
      }
      case 5: {
        input = askString("Digite o nome do produto que deseja procurar ");
        showSearchProducts(searchProduct(input));
        break;
      }

      //CARRINHO

      case 6: {
        showCartProducts();
        totalValueCart();
        if (getCartProducts().length > 0) {
          input = askString("Você deseja terminar a compra? Y/N");
          await finishShopping(input);
          await showReceipt();
        } else {
          alertCartProducts();
        }
        break;
      }

      case 7: {
        showCartProducts();
        if (getCartProducts().length > 0) {
          input = askNumber(
            "Digite o número do produto que você deseja remover: ",
          );
          removeCartProduct(input);
        } else {
          alertCartProducts();
        }
        break;
      }

      case 8: {
        showCartProducts();
        if (getCartProducts().length > 0) {
          showTotalCart();
          await cleanCart();
        } else {
          alertCartProducts();
        }

        break;
      }

      case 9: {
        showFinishProgram();
        running = false;
        break;
      }

      default: {
        console.log("Opção inválida");
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

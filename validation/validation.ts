import promptSync from "prompt-sync";

const prompt = promptSync();

function validationInputNumber(input: number): boolean {
  return Number.isFinite(input) && input > 0;
}

function validationInputString(input: string): boolean {
  if (input.trim().length === 0) {
    return false;
  }
  return true;
}

function askString(message: string): string {
  while (true) {
    const input: string = prompt(message);

    if (validationInputString(input)) {
      return input;
    }

    console.log("Entrada inválida.");
  }
}

function askNumber(message: string): number {
  while (true) {
    const input = Number(prompt(message));

    if (validationInputNumber(input)) {
      return input;
    }

    console.log("Número inválido.");
  }
}

export { validationInputNumber, validationInputString, askNumber, askString };

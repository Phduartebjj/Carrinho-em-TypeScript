function validationInputNumber(input: number): boolean {
  return Number.isFinite(input) && input > 0;
}

function validationInputString(input:string):boolean{
    if(input.trim().length===0){
        return false
    }
    return true
}

export {
    validationInputNumber,validationInputString
}
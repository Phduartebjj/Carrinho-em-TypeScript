import promptSync from "prompt-sync"
import { showOptionsCatalog } from "../ui.js"

const prompt = promptSync()

let running:boolean = true


function startCatalog():void{
    while(running){
        showOptionsCatalog()
        let choice: number = Number(prompt("Qual número você deseja?"))

        switch(choice){
            case 1:{
                
                break
            }
            case 2:{

                break
            }

            default:{
                running = false
                break
            }
        }
    }
}
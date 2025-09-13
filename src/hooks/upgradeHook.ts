import { useState } from "react"

export const useUpgradesStates = ()=>{
    const [mouseTrapCount, setMouseTrapCount] = useState(Number(localStorage.getItem('mouseTrapCount'))??0);
    const [mouseTrapPrice, setMouseTrapPrice] = useState(Number(localStorage.getItem('mouseTrapPrice'))??15);
    
    const [cheeseCount, setCheeseCount] = useState(Number(localStorage.getItem('cheeseCount'))??0);
    const [cheesePrice, setCheesePrice] = useState(Number(localStorage.getItem('cheesePrice'))??100);
    

    return{
        mouseTrapPrice, setMouseTrapPrice, mouseTrapCount, setMouseTrapCount,
        cheeseCount, setCheeseCount, cheesePrice, setCheesePrice,
    }
}
import { useState } from "react"

export const useUpgrades = ()=>{
    const [mouseTrapCount, setMouseTrapCount] = useState(0);
    const [mouseTrapPrice, setMouseTrapPrice] = useState(15);
    
    const [cheeseCount, setCheeseCount] = useState(0);
    const [cheesePrice, setCheesePrice] = useState(100);
    

    return{
        mouseTrapPrice, setMouseTrapPrice, mouseTrapCount, setMouseTrapCount,
        cheeseCount, setCheeseCount, cheesePrice, setCheesePrice,
    }
}
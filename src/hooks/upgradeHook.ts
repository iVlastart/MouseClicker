import { useState } from "react"

export const useUpgradesStates = ()=>{
    const [mouseTrapCount, setMouseTrapCount] = useState(Number(localStorage.getItem('mouseTrapCount'))??0);
    const initialMouseTrapPrice = Number(localStorage.getItem('mouseTrapPrice'));
    const [mouseTrapPrice, setMouseTrapPrice] = useState(
        initialMouseTrapPrice > 0 ? initialMouseTrapPrice : 15
    );
    
    const [cheeseCount, setCheeseCount] = useState(Number(localStorage.getItem('cheeseCount'))??0);
    const initialCheesePrice = Number(localStorage.getItem('cheesePrice'));
    const [cheesePrice, setCheesePrice] = useState(
        initialCheesePrice>0?initialCheesePrice:100
    );

    const [bCheeseCount, setBCheeseCount] = useState(Number(localStorage.getItem('bCheeseCount'))??0);
    const initialBCheesePrice = Number(localStorage.getItem('bCheesePrice'));
    const [bCheesePrice, setBCheesePrice] = useState(
        initialBCheesePrice>0?initialBCheesePrice:999
    ); 
    

    return{
        mouseTrapPrice, setMouseTrapPrice, mouseTrapCount, setMouseTrapCount,
        cheeseCount, setCheeseCount, cheesePrice, setCheesePrice,
        bCheeseCount, setBCheeseCount, bCheesePrice, setBCheesePrice,
    }
}
import { useState } from "react";
import { ClickSide } from "../components/clickSide";
import { MiddleSide } from "../components/middleSide";
import { UpgradeSide } from "../components/upgradeSide";



export const Game = ()=>{
    const initialMouseCount = Number(localStorage.getItem('mouseCount'));
    const [mouseCount, setMouseCount] = useState(!isNaN(initialMouseCount) ? initialMouseCount : 0);
    const initialIncrement = Number(localStorage.getItem('increment'));
    const [increment, setIncrement] = useState(!isNaN(initialIncrement)?initialIncrement:0);
    
    return(
        <main className="flex flex-row w-full h-[calc(100vh-10vh)]">
            <ClickSide mouseCount={mouseCount} setMouseCount={setMouseCount} increment={increment} setIncrement={setIncrement}/>
            <MiddleSide/>
            <UpgradeSide mouseCount={mouseCount} setMouseCount={setMouseCount} increment={increment} setIncrement={setIncrement}/>
        </main>
    )
};
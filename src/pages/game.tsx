import { useState } from "react";
import { ClickSide } from "../components/clickSide";
import { MiddleSide } from "../components/middleSide";
import { UpgradeSide } from "../components/upgradeSide";



export const Game = ()=>{
    const [mouseCount, setMouseCount] = useState<number>(Number(localStorage.getItem('mouseCount'))??0);
    const [increment, setIncrement] = useState<number>(Number(localStorage.getItem('increment'))??0);
    return(
        <main className="flex flex-row w-full h-[calc(100vh-10vh)]">
            <ClickSide mouseCount={mouseCount} setMouseCount={setMouseCount} increment={increment} setIncrement={setIncrement}/>
            <MiddleSide/>
            <UpgradeSide mouseCount={mouseCount} setMouseCount={setMouseCount} increment={increment} setIncrement={setIncrement}/>
        </main>
    )
};
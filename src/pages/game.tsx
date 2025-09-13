import { useState } from "react";
import { useUnsavedChanges } from "../hooks/hooks";
import { ClickSide } from "../components/clickSide";
import { MiddleSide } from "../components/middleSide";
import { UpgradeSide } from "../components/upgradeSide";



export const Game = ()=>{
    const [mouseCount, setMouseCount] = useState<number>(Number(localStorage.getItem('mouseCount'))??0);
    const [increment, setIncrement] = useState<number>(0);
    useUnsavedChanges(mouseCount);
    return(
        <main className="flex flex-row w-full h-[calc(100vh-10vh)]">
            <ClickSide mouseCount={mouseCount} setMouseCount={setMouseCount} increment={increment} setIncrement={setIncrement}/>
            <MiddleSide/>
            <UpgradeSide mouseCount={mouseCount} setMouseCount={setMouseCount} increment={increment} setIncrement={setIncrement}/>
        </main>
    )
};
import type { IMouse } from "../interfaces/interfaces";
import { ClickSide } from "./clickSide";
import { MiddleSide } from "./middleSide";
import { UpgradeSide } from "./upgradeSide";


export const Game = ({mouseCount, setMouseCount}: IMouse)=>{
    return(
        <main className="flex flex-row w-full h-[calc(100vh-10vh)]">
            <ClickSide mouseCount={mouseCount} setMouseCount={setMouseCount}/>
            <MiddleSide/>
            <UpgradeSide/>
        </main>
    )
};
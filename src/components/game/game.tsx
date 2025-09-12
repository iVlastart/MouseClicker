import type { IMouse } from "../../interfaces/IMouse";
import { ClickSide } from "./clickSide";


export const Game = ({mouseCount, setMouseCount}: IMouse)=>{
    return(
        <main className="flex flex-row w-full h-[calc(100vh-10vh)]">
            <ClickSide mouseCount={mouseCount} setMouseCount={setMouseCount}/>
        </main>
    )
};
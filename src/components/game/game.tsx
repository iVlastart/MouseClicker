import { ClickSide } from "./clickSide";


export const Game = ({mouseCount}: IMouse)=>{
    return(
        <main className="flex flex-row w-full h-[calc(100vh-10vh)]">
            <ClickSide mouseCount={mouseCount}/>
        </main>
    )
};
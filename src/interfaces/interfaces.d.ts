import type { Dispatch, SetStateAction } from "react";

interface IMouse{
    mouseCount: number,
    setMouseCount: Dispatch<SetStateAction<number>>
}

interface IMouseTrap{
    
}
interface IUpgrade{
    key: number,
    img: string,
    price: number,
    increment: number, 
    count: number,
    isVisible: boolean,
    mouse: IMouse
}
import type { Dispatch, SetStateAction } from "react";

interface IMouse{
    mouseCount: number,
    setMouseCount: Dispatch<SetStateAction<number>>,
}

interface IMouseTrap
{
    
}

interface IUpgrade{
    img: string,
    name: string,
    price: number, 
    setPrice: Dispatch<SetStateAction<number>>,
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    mouse: IMouse
}
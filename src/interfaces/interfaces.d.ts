import type { Dispatch, SetStateAction } from "react";

interface IMouse{
    mouseCount: number,
    setMouseCount: Dispatch<SetStateAction<number>>
}
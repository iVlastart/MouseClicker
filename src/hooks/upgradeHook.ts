import { useState } from "react";

export const useUpgradeHook = () => {
    //mouse trap  
    const [mouseTrapPrice, setMouseTrapPrice] = useState<number>(15);
    const [mouseTrapIncrement, setMouseTrapIncrement] = useState<number>(0.5*mouseTrapPrice);
    const [mouseTrapCount, setMouseTrapCount] = useState<number>(0);

    return{ 
            mouseTrapPrice, setMouseTrapPrice, mouseTrapIncrement, setMouseTrapIncrement, mouseTrapCount, setMouseTrapCount,
    };
};
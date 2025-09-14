import { useUpgradesStates } from "./upgradeHook";
import mousetrap from '../components/sprites/mousetrap.png';
import cheese from '../components/sprites/cheese.png';
import bCheese from '../components/sprites/bCheese.png'
import { useUnsavedChanges } from "./saveStates";

export const useUpgrades = (mouseCount:number, increment: number)=>{
    const { 
        mouseTrapPrice, setMouseTrapPrice, mouseTrapCount, setMouseTrapCount,
        cheeseCount, setCheeseCount, cheesePrice, setCheesePrice,
        bCheeseCount, setBCheeseCount, bCheesePrice, setBCheesePrice,
    } = useUpgradesStates();
    useUnsavedChanges(mouseCount, mouseTrapCount, mouseTrapPrice, cheeseCount, cheesePrice,
                        bCheeseCount, bCheesePrice);
    const upgrades = [
        {
            id: 1,
            img: mousetrap,
            name: "Mouse Trap",
            price: mouseTrapPrice,
            setPrice: setMouseTrapPrice,
            count: mouseTrapCount,
            setCount: setMouseTrapCount,
            bonus: 1,
        },
        {
            id: 2,
            img: cheese,
            name: "Cheese",
            price: cheesePrice,
            setPrice: setCheesePrice,
            count: cheeseCount,
            setCount: setCheeseCount,
            bonus: 5
        },
        {
            id: 3,
            img: bCheese,
            name: 'Biggie Cheese',
            price: bCheesePrice,
            setPrice: setBCheesePrice,
            count: bCheeseCount,
            setCount: setBCheeseCount,
            bonus: 20
        },
    ];

    return upgrades;
};
import { useUpgradesStates } from "./upgradeHook";
import mousetrap from '../components/sprites/mousetrap.png';
import cheese from '../components/sprites/cheese.png';

export const useUpgrades = ()=>{
    const { 
        mouseTrapPrice, setMouseTrapPrice, mouseTrapCount, setMouseTrapCount,
        cheeseCount, setCheeseCount, cheesePrice, setCheesePrice,
    } = useUpgradesStates();
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
            id: 1,
            img: cheese,
            name: "Cheese",
            price: cheesePrice,
            setPrice: setCheesePrice,
            count: cheeseCount,
            setCount: setCheeseCount,
            bonus: 5
        },
    ];

    return upgrades;
};
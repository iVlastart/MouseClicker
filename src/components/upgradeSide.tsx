import { useUpgrades } from '../hooks/upgradeHook';
import type { IMouse } from '../interfaces/interfaces';
import mousetrap from './sprites/mousetrap.png';
import cheese from './sprites/cheese.png';
import { Upgrade } from './upgrade';
export const UpgradeSide = ({mouseCount, setMouseCount}:IMouse)=>{
    const { 
        mouseTrapPrice, setMouseTrapPrice, mouseTrapCount, setMouseTrapCount,
        cheeseCount, setCheeseCount, cheesePrice, setCheesePrice,
     } = useUpgrades();
    const upgrades = [
        {
            id: 1,
            img: mousetrap,
            name: "Mouse Trap",
            price: mouseTrapPrice,
            setPrice: setMouseTrapPrice,
            count: mouseTrapCount,
            setCount: setMouseTrapCount
        },
        {
            id: 1,
            img: cheese,
            name: "Cheese",
            price: cheesePrice,
            setPrice: setCheesePrice,
            count: cheeseCount,
            setCount: setCheeseCount
        },
    ];
    return(
        <div className="h-full w-1/2 md:w-1/4 flex flex-col">
            {upgrades.map((upgrade, key)=>(
                <Upgrade key={key} img={upgrade.img} name={upgrade.name} price={upgrade.price} setPrice={upgrade.setPrice}
                        count={upgrade.count} setCount={upgrade.setCount} mouse={{mouseCount, setMouseCount}}/>
            ))}
        </div>
    );
};
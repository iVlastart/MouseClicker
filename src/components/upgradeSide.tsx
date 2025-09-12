import type { IMouse } from '../interfaces/interfaces';
import mousetrap from './sprites/mousetrap.png'
export const UpgradeSide = ({mouseCount, setMouseCount}:IMouse)=>{
    const { mouseTrapPrice, mouseTrapIncrement } = useUpgradeHook();
    const upgrades = [
        {
            id: 1,
            img: mousetrap,
            count: 0,
            increment: mouseTrapIncrement,
            price: mouseTrapPrice,
        }
    ];
    return(
        <div className="h-full w-1/2 md:w-1/4 flex flex-col">
            {upgrades.map((upgrade, key)=>(
                <div></div>
            ))}
        </div>
    );
};
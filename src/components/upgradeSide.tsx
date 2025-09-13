import { useUpgrades } from '../hooks/upgrades';
import type { IMouse } from '../interfaces/interfaces';
import { Upgrade } from './upgrade';
export const UpgradeSide = ({mouseCount, setMouseCount, increment, setIncrement}:IMouse)=>{
    const upgrades = useUpgrades();
    return(
        <div className="h-full w-1/2 md:w-1/4 flex flex-col">
            {upgrades.map((upgrade, key)=>(
                <Upgrade key={key} img={upgrade.img} name={upgrade.name} price={upgrade.price} setPrice={upgrade.setPrice}
                        count={upgrade.count} setCount={upgrade.setCount} mouse={{mouseCount, setMouseCount, increment, setIncrement}}
                        bonus={upgrade.bonus}/>
            ))}
        </div>
    );
};
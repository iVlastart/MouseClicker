import type { IUpgrade } from "../interfaces/interfaces";

export const Upgrade = ({img, price, isVisible}: IUpgrade)=>{
    return(
        <div className="flex flex-row">
            {
                isVisible &&
                    <img src={img} />
            }
            
        </div>
    );
}
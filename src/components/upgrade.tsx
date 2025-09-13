import type { IUpgrade } from "../interfaces/interfaces"

export const Upgrade = ({img, name, price, setPrice, count, setCount, mouse, bonus}:IUpgrade)=>{
    const handlePurchase = ()=>{
        if(mouse.mouseCount<price) return;
        setCount(count+=1);
        mouse.setMouseCount(mouse.mouseCount-price);
        setPrice(Math.round(price+(price/2)));
        mouse.setIncrement(mouse.increment+=bonus);
    };
    return(
        <div className="flex flex-row h-fit w-full hover:cursor-pointer hover:bg-gray-200
                            max-w-sm mt-10 justify-evenly items-center bg-white border 
                            border-gray-200 rounded-lg shadow-sm transition-colors duration-200"
                            onClick={handlePurchase}>
            <img src={img} alt="Mouse Trap" className="w-16 h-16"/>
            <div className="flex flex-col w-1/3 items-center">
                <span className="text-2xl">
                    {name}
                </span>
                <span className={`${mouse.mouseCount>=price?'text-green-500':'text-red-500'}`}>
                    {price}
                </span>
            </div>
            <span className="text-3xl">
                {count}
            </span>
        </div>
    )
}
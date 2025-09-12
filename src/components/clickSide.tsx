import type { IMouse } from '../interfaces/interfaces';
import mouseImg from './sprites/mouse.png';

export const ClickSide = ({mouseCount, setMouseCount}:IMouse)=>{

    const handleMouseImgClick = ()=>{
        setMouseCount(mouseCount+=1);
    };

    return(
        <div className="flex flex-col h-full w-1/2 md:w-1/4 border-r border-black">
            <span className="max-w-sm mt-10 flex justify-center items-center bg-white border 
                            border-gray-200 rounded-lg shadow-sm w-full">
                {mouseCount}
            </span>
            <div className="pt-52 md:pt-24 pl-3 md:pl-10 pr-5 md:pr-0">
                <img src={mouseImg} className='h-25 w-25 md:h-65 md:w-65 hover:cursor-pointer' 
                        onClick={handleMouseImgClick}/>
            </div>
        </div>
    )
};
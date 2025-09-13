import type { IButton } from "../interfaces/interfaces";

export const Button = ({children}:IButton)=>{
    return(
        <span className="text-center bg-gray-400 p-3 rounded-full text-white
                            hover:bg-gray-500 hover:scale-105 transition-all duration-200 flex justify-center items-center">
            {children}
        </span>
    );
};
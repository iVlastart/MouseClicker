import { Link } from "react-router-dom";

export const NotFound = ()=>{
    return(
        <div className="h-screen w-screen relative">
            <span className="absolute text-8xl top-1/2 left-1/2 -translate-1/2 flex flex-col">
                <span className="text-center">404</span>
                <span>Page Not Found</span>
            </span>
            <span className="text-center absolute bottom-1/6 text-xl left-1/2 -translate-1/2">
                <Link to={'/'}>Return back to game</Link>
            </span>
        </div>
    );
};
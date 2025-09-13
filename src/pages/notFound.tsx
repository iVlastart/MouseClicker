import { Link } from "react-router-dom";
import { Button } from "../components/button";

export const NotFound = ()=>{
    return(
        <div className="h-screen w-screen relative">
            <span className="absolute text-2xl md:text-8xl top-1/2 left-1/2 -translate-1/2 flex flex-col">
                <span className="text-center">404</span>
                <span>Page Not Found</span>
            </span>
            <div className="absolute bottom-1/6 text-xl left-1/2 -translate-1/2">
                <Button>
                    <Link to={'/'}>Return back to game</Link>
                </Button>
            </div>
            
        </div>
    );
};
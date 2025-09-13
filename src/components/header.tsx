import { Link } from "react-router-dom";
import { Button } from "./button";

export const Header = ()=>{
    return(
        <header className="flex flex-row justify-between items-start pt-2 md:pt-5 px-4">
          <h1 className="font-semibold text-2xl md:text-4xl mx-auto">
            Mouse Clicker
          </h1>
          <div className="flex flex-row gap-2">
            <Button>
              <Link to={'/'}>Game</Link>
            </Button>
            <Button>
              <Link to={'/version'}>Version</Link>
            </Button>
          </div>
        </header>
    )
};
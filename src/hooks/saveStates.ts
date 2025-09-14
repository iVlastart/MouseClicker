import { useEffect } from "react";

export const useUnsavedChanges = (mouseCount: number, mouseTrapCount:number, mouseTrapPrice: number,
                                    cheeseCount: number, cheesePrice: number,  
                                    bCheeseCount: number, bCheesePrice: number) => {

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            //mice
            localStorage.setItem('mouseCount', String(mouseCount));
            //mouse trap
            localStorage.setItem('mouseTrapCount', String(mouseTrapCount));
            localStorage.setItem('mouseTrapPrice', String(mouseTrapPrice));
            //cheese
            localStorage.setItem('cheeseCount', String(cheeseCount));
            localStorage.setItem('cheesePrice', String(cheesePrice));

            //Biggie Cheese
            localStorage.setItem('bCheeseCount', String(bCheeseCount));
            localStorage.setIkltem('bCheesePrice', String(bCheesePrice));

            e.preventDefault();
        };
        
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [mouseCount, mouseTrapCount, mouseTrapPrice, cheeseCount, cheesePrice]);
};
import { useEffect } from "react";

export const useUnsavedChanges = (mouseCount: number) => {

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
                localStorage.setItem('mouseCount', String(mouseCount));
                e.preventDefault();
        };
        
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [mouseCount]);
};
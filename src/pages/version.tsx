import { Header } from "../components/header";

export const Version = ()=>{
    return(
        <>
            <Header/>

            <div className="flex flex-col justify-evenly items-center w-full h-[calc(100vh-10vh)] text-2xl">
                <span>Version: 1.0</span>
                <span className="text-wrap">
                    <ul className="list-disc list-inside">
                        <li>
                            You can click the mouse for mice
                        </li>
                        <li>
                            There are two upgrades
                        </li>
                        <li>
                            Buy the upgrade for extra mice
                        </li>
                    </ul>
                </span>
            </div>
        </>
    );
};
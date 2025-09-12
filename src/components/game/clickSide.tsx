
export const ClickSide = ({mouseCount}:IMouse)=>{
    return(
        <div className="flex flex-col w-1/4">
            <span className="max-w-sm p-6 flex justify-center items-center bg-white border 
                            border-gray-200 rounded-lg shadow-sm w-full">
                {mouseCount}
            </span>
            <div>

            </div>
        </div>
    )
};
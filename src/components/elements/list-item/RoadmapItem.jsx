import { useState } from "react";
import loadingItemImg from "../../../assets/images/loading-item.png";


const RoadmapItem = ({ children, activeText, disabled = false }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
        {disabled ? (
            <div className="w-28 h-28">
                <div className="w-20 h-16 bg-borderLight flex justify-center items-center border-lightText border-b-8 rounded-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <div className="h-[50%]">{children}</div>
                </div>
            </div>
        ) : (
            <div className="relative w-28 h-28">
                {isActive && (
                    <>
                    <img className="w-28 select-none spin" src={loadingItemImg} />
                    <div className="absolute border-2 text-sm rounded-lg bg-white text-primary font-bold py-2 px-3 z-10 left-1/2 -translate-x-1/2 -top-[20%]">{activeText}</div>
                    </>
                )}
                <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className="w-20 h-16 bg-[#84D8FF] flex justify-center items-center border-primary border-b-8 rounded-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <div className="h-[50%]">{children}</div>
                </div>
            </div>
        )}
        </>
    );
};

export default RoadmapItem;
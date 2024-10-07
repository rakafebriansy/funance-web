import { useState } from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ btnType = 'button', small, children, outlined = false, link = "#", disabled = false }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const toggleDisable = () => isDisabled = setIsDisabled(!isDisabled);

    if(btnType == 'link') {
        return (
            <Link onMouseEnter={toggleDisable} onMouseLeave={toggleDisable} to={link} className={`flex w-full relative font-semibold mb-1 rounded-full justify-center items-center ${small ? 'p-1 text-sm' : 'p-2 text-sm'} ${disabled || isDisabled ? 'bg-[#E5E5E5] text-lightText' : outlined ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
                {!disabled && !isDisabled && (<div className={`w-full h-full absolute left-0 top-1 rounded-full z-[-1] ${outlined ? 'bg-[#E5E5E5]' : 'bg-dark'}`}></div>)}
                <span>{children}</span>
            </Link>
        );
    } else {
        return (
            <button onClick={toggleDisable} className={`flex w-full relative font-semibold mb-1 rounded-full justify-center items-center ${small ? 'p-1 text-sm' : 'p-2 text-sm'} ${disabled || isDisabled ? 'bg-[#E5E5E5] text-lightText' : outlined ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
                {!disabled && !isDisabled && (<div className={`w-full h-full absolute left-0 top-1 rounded-full z-[-1] ${outlined ? 'bg-[#E5E5E5]' : 'bg-dark'}`}></div>)}
                <span>{children}</span>
            </button>
        );
    }
}

export default PrimaryButton;
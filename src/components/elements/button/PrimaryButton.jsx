import { useState } from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ btnType = 'button', small, children, outlined = false, link = "#", disabled = false }) => {
    const [isDisabled, setIsDisabled] = useState(false);


    if(btnType == 'link') {
        return (
            <Link onMouseEnter={() => setIsDisabled(true)} onMouseLeave={() => setIsDisabled(false)} to={link} className={`flex border-b-4 w-full relative font-semibold mb-1 rounded-full justify-center items-center ${small ? 'p-1 text-sm' : 'p-2 text-sm'} ${disabled || isDisabled ? 'bg-[#E5E5E5] text-lightText border-[#E5E5E5]' : outlined ? 'bg-white text-primary ' : 'bg-primary text-white border-dark'}`}>
                <span>{children}</span>
            </Link>
        );
    } else {
        return (
            <button onClick={toggleDisable} className={`flex border-b-4 w-full relative font-semibold mb-1 rounded-full justify-center items-center ${small ? 'p-1 text-sm' : 'p-2 text-sm'} ${disabled || isDisabled ? 'bg-[#E5E5E5] text-lightText border-[#E5E5E5]' : outlined ? 'bg-white text-primary ' : 'bg-primary text-white border-dark'}`}>
                <span>{children}</span>
            </button>
        );
    }
}

export default PrimaryButton;
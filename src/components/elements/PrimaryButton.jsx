import { Link } from "react-router-dom";

const PrimaryButton = ({ btnType, small, children }) => {
    if(btnType == 'link') {
        return (
            <Link className={`flex bg-primary w-full relative font-semibold text-white rounded-full justify-center items-center ${small ? 'p-2 text-xs' : 'p-2 text-base'}`}>
                <div className="w-full h-full absolute left-0 bg-shadowPrimary top-1 rounded-full z-[-1]"></div>
                <span>{children}</span>
            </Link>
        );
    }
}

export default PrimaryButton;
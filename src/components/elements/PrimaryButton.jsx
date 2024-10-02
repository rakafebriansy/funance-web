import { Link } from "react-router-dom";

const PrimaryButton = ({ btnType, small, children }) => {
    if(btnType == 'link') {
        return (
            <div className="">
                <Link className={`flex bg-primary w-full relative font-semibold mb-1 text-white rounded-full justify-center items-center ${small ? 'p-1 text-sm' : 'p-2 text-base'}`}>
                    <div className="w-full h-full absolute left-0 bg-shadow top-1 rounded-full z-[-1]"></div>
                    <span>{children}</span>
                </Link>
            </div>
        );
    }
}

export default PrimaryButton;
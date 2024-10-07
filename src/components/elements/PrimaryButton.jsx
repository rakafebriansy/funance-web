import { Link } from "react-router-dom";

const PrimaryButton = ({ btnType = 'button', small, children, outlined = false, link = "#" }) => {
    if(btnType == 'link') {
        return (
            <Link to={link} className={`flex w-full relative font-semibold mb-1 rounded-full justify-center items-center ${small ? 'p-1 text-sm' : 'p-2 text-sm'} ${outlined ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
                <div className={`w-full h-full absolute left-0 top-1 rounded-full z-[-1] ${outlined ? 'bg-[#E5E5E5]' : 'bg-dark'}`}></div>
                <span>{children}</span>
            </Link>
        );
    }
}

export default PrimaryButton;
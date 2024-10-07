import { Link } from "react-router-dom";

const IconButton = ({ btnType = 'button', small = false, children, image, textColor }) => {
    if(btnType == 'link') {
        return (
            <Link className={`flex gap-3 border-2 bg-white font-bold drop-shadow-md w-full relative p-2 rounded-2xl justify-center items-center ${textColor}`}>
                <img src={image} alt={children} className="h-6" />
                <span>{children}</span>
            </Link>
        );
    }
}

export default IconButton;
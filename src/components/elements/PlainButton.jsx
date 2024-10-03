import { Link } from "react-router-dom";

const PlainButton = ({ btnType = 'button', small = false, children, image, textColor }) => {
    if(btnType == 'link') {
        return (
            <Link className={`flex gap-3 border-2 bg-white drop-shadow-md w-full relative font-semibold mb-1 rounded-2xl justify-center items-center ${textColor}`}>
                <img src={image} alt={children} className="h-[50%]" />
                <span>{children}</span>
            </Link>
        );
    }
}

export default PlainButton;
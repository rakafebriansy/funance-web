import { Link } from "react-router-dom";

const SidebarItem = ({ image, children, link, isActive = false }) => {
    return (
        <Link to={link} className={`rounded-xl p-3 flex gap-2 w-full items-start cursor-pointer ${isActive ? 'bg-primary text-white' : 'hover:bg-light text-darkText'}`}>
            <img src={image} alt="" className="h-6" />
            <p className="font-bold">{children}</p>
        </Link>
    );
};
export default SidebarItem;
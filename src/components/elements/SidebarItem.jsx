import { Link } from "react-router-dom";

const SidebarItem = ({ image, children }) => {
    return (
        <Link className="rounded-lg hover:bg-primary text-darkText hover:text-white p-3 flex gap-2 w-full items-start cursor-pointer">
            <img src={image} alt="" className="h-6" />
            <p className="font-bold">{children}</p>
        </Link>
    );
};
export default SidebarItem;
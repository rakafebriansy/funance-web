const Sidebar = ({ children }) => {
    return (
        <div className="fixed z-20 left-0 top-0 h-screen px-12 w-[25%]">
            <ul className="absolute flex flex-col gap-5 items-center w-[60%] justify-center top-[15%]">{children}</ul>
        </div>
    );
};
export default Sidebar;
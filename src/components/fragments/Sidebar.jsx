const Sidebar = ({ children }) => {
    return (
        <div className="h-screen w-full relative">
            <ul className="absolute flex flex-col gap-5 items-center left-1/2 -translate-x-1/2 justify-center w-[70%] top-[15%]">{children}</ul>
        </div>
    );
};
export default Sidebar;
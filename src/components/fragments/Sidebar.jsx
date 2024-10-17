const Sidebar = ({ children }) => {
    return (
        <div className="h-screen w-[25%] bg-white fixed left-0 flex justify-center z-40">
            <ul className="flex flex-col gap-5 items-center w-[70%] mt-10">{children}</ul>
        </div>
    );
};
export default Sidebar;
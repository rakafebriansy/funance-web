const AchievementItem = ({ image, title, children, isDisabled = false }) => {
    return (
        <div className="p-4 border rounded-2xl flex gap-4 text-sm">
            <div className={`w-16 h-16 rounded-lg flex justify-center items-center border-b-[3px] ${isDisabled ? 'bg-lightText border-longText' : 'bg-primary border-dark'}`}>
                <img src={image} className="w-[50%] " />
            </div>
            <div className="h-full flex-grow flex-col justify-center gap-2">
                <p className="font-bold">{title}</p>
                <p className="text-longText">{children}</p>
            </div>
        </div>
    );
};
export default AchievementItem;
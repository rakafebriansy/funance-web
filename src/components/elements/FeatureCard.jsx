const FeatureCard = ({ iconImg, children, title }) => {
    return (
        <div className="w-52 h-52 p-2 text-dark gap-1 bg-secondary text-center border-x-2 border-t-2 border-b-[6px] border-[#84D8FF] rounded-md flex items-center justify-center flex-col">
            <img className="w-[30%]" src={iconImg} alt={title} />
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="text-xs">{children}</p>
        </div>
    );
}

export default FeatureCard;
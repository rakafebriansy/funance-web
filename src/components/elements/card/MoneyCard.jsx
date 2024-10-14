const MoneyCard = ({ image, children }) => {
    return (
        <div className="w-36 h-44 border-2 shadow-md flex flex-col justify-between items-start gap-4 p-5 rounded-lg hover:bg-light hover:border-[#84D8FF]">
            <div className="w-full justify-center flex">
                <img src={image} alt="" className="w-full" />
            </div>
            <p className="text-darkText">{children}</p>
        </div>
    );
}

export default MoneyCard;
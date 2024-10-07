const IntroductionCard = ({ image, children }) => {
    return (
        <div className="w-36 h-36 border-2 shadow-md flex flex-col justify-center items-center gap-4 p-5 rounded-lg hover:bg-light hover:border-[#84D8FF]">
            <img src={image} alt="" className="w-[50%]" />
            <p className="font-semibold text-darkText">{children}</p>
        </div>
    );
}

export default IntroductionCard;
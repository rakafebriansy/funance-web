const ThinProgressBar = ({ percentage }) => {
    return (
        <div className="flex items-start justify-center gap-2 flex-col">
            <p className="text-darkText font-semibold">{Math.floor(percentage)}% menuju penuh!</p>
            <div className="w-full h-2 rounded-full relative bg-[#E0E0E0]">
                <div className="absolute bg-primary h-full top-0 left-0 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}

export default ThinProgressBar;
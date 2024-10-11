const ProgressBar = ({ percentage, height = 0.5 }) => {
    return (
        <div className="w-full rounded-full relative bg-[#E0E0E0]" style={{ height: `${height}rem` }}>
            <div className="absolute bg-primary h-full top-0 left-0 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
    );
}

export default ProgressBar;
const ExperienceBar = ({ percentage, children }) => {
    return (
        <div className="h-6 w-32 relative border-primary border-2 rounded-lg rounded-2">
            <div className="h-9 w-9 rounded-full border-2 border-[#5FC0F6] bg-white flex absolute justify-center items-center left-0 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="border-[#4183B2] bg-[#59B1F0] rounded-full w-6 h-6 border-2 flex justify-center items-center">
                    <p className=" font-bubblegumSansRegular font-bold text-lg text-white text-center" style={{ '-webkit-text-stroke': '0.5px #4183B2' }}>{children}</p>
                </div>
            </div>
            <div className="bg-[#3B97D3] h-full rounded-md flex justify-end overflow-hidden items-center w-full" style={{ width: `${percentage}%` }}>
                {Array.from({length: Math.floor(percentage/20)}, (_, i) => i).map(number => (
                    <svg className="" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="5" className="h-5" transform="matrix(0.888263 -0.459335 0.627361 0.778728 0 2.26221)" fill="#2980BA"/>
                    </svg>
                ))}
            </div>
        </div>
    );
};
export default ExperienceBar;
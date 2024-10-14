const TextCard = ({ children }) => {
    return (
        <div className="py-2 font-semibold px-4 border-2 border-b-4 text-darker flex flex-col justify-center items-center gap-4 rounded-2xl hover:bg-light hover:border-[#84D8FF]">
            <p>{children}</p>
        </div>
    );
}

export default TextCard;
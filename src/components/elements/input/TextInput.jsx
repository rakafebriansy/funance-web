const TextInput = ({children, name, placeholder, typed = false}) => {
    return (
        <div className="w-full h-full relative">
            <div className="absolute top-1/2 -translate-y-1/2 right-[5%]">
                {children ?? ''}
            </div>
            <input type="text" name={name} value={typed ? placeholder : ''} placeholder={(!typed) && placeholder} className={`w-full h-full p-3 bg-[#F7F7F7] border border-borderLight rounded-xl`} />
        </div>
    );
}

export default TextInput;
import { useState } from "react";

const DropdownInput = ({list, placeholder}) => {

    const [isActive, setIsActive] = useState(false);
    const [text, setText] = useState(placeholder);
    return (
        <div className="w-full flex flex-col gap-2 select-none">
            <div onClick={() => {
                setIsActive(!isActive);
            }} className="w-full cursor-pointer relative p-3 bg-[#F7F7F7] border border-borderLight rounded-2xl">
                <div className={`absolute top-1/2 -translate-y-1/2 right-[5%] ${isActive ? 'rotate-180' : ''}`}>
                    <svg className="w-4" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.07884 3.20547L1.07885 3.20547L7.74554 8.51999C8.44856 9.08043 9.55147 9.08043 10.2545 8.51999L16.9212 3.20547L16.9212 3.20546C17.2877 2.91326 17.5 2.50279 17.5 2.06291C17.5 1.62302 17.2877 1.21255 16.9212 0.920354L16.9212 0.92035C16.2182 0.359886 15.1152 0.359883 14.4122 0.920343C14.4122 0.920345 14.4122 0.920348 14.4122 0.92035L9.00002 5.23484L3.58783 0.920343L3.58782 0.920339C2.88476 0.359887 1.78191 0.359887 1.07885 0.920339L1.07884 0.920346C0.71232 1.21254 0.5 1.62301 0.5 2.06291C0.5 2.50281 0.71232 2.91328 1.07884 3.20547Z" fill="#D9D9D9" stroke="#D9D9D9"/>
                    </svg>
                </div>
                {text}
            </div>
            {isActive && (
                <ul className="w-full max-h-32 overflow-auto p-3 bg-[#F7F7F7] border border-borderLight rounded-xl">
                    {list.map(item => (<li className="p-1 hover:bg-light cursor-pointer" onClick={(e) => {
                        setText(e.target.innerText);
                        setIsActive(false);
                    }}>{item}</li>))}
                </ul>
            )}
        </div>
    );
}

export default DropdownInput;
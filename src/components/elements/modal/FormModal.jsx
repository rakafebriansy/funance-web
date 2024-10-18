import PrimaryButton from "../button/PrimaryButton";

const FormModal = ({ title, children, btnTitle, isTrigger, setIsTrigger, size}) => {
    return (
        <>
        {isTrigger && (
            <div className="w-full h-screen absolute top-0 left-0 z-50">
            <div className="w-full h-full bg-black opacity-40" onClick={() => setIsTrigger(false)}></div>
            <div className="absolute bg-white top-1/2 flex flex-col justify-center items-center gap-5 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl w-[40rem] h-[22rem]">
                <div className={`gap-4 items-center justify-center flex flex-col ${size}`}>
                    <p className="font-bold text-xl">{title}</p>
                    {children}
                    <PrimaryButton btnType="button" onclick={() => setIsTrigger(false)} small={false}>{btnTitle}</PrimaryButton>
                </div>
            </div>
        </div>
        )}
        </>
    );
};
export default FormModal;
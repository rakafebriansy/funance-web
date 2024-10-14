import { useState } from "react";
import PrimaryButton from "../../components/elements/button/PrimaryButton";

const QuizNavigationPartial = ({ link }) => {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={`w-full border-t h-[15%] fixed bottom-0 flex justify-around items-center ${isChecked ? 'bg-light' : 'bg-white'}`}>
            {isChecked ? (
                <div className="flex gap-5 items-center">
                    <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
                        <svg className="w-[50%]" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 5.5L15.2067 24.3278C14.8136 24.7017 14.194 24.694 13.8103 24.3103L5.5 16" stroke="#1CB0F6" stroke-width="10" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <p className="text-dark font-semibold text-lg">Awal yang bagus!</p>
                </div>
            ) : (
                <div className="w-28">
                    <PrimaryButton btnType="link" link={link} outlined={true} small={false}>SKIP</PrimaryButton>
                </div>
            )}
            <div className="w-28">
                {isChecked ? (
                    <PrimaryButton btnType="link" link={link} small={false}>LANJUT</PrimaryButton>
                ) : (
                    <PrimaryButton btnType="button" onclick={() => setIsChecked(true)} small={false}>CEK</PrimaryButton>
                )}
            </div>
        </div>
    );
};
export default QuizNavigationPartial;
import PrimaryButton from "../../components/elements/button/PrimaryButton";
import starImg from "../../assets/images/star.png"
import yesImg from "../../assets/images/yes.png"
import noImg from "../../assets/images/no.png"

const QuizScoring = ({  }) => {
    return (
        <div className="w-full bg-primary relative flex justify-center items-center h-screen">
            <div className="w-full border-t h-[15%] fixed bottom-0 flex justify-center items-center bg-light">
                <div className="w-[80%] flex justify-end">
                    <div className="w-28">
                        <PrimaryButton btnType="link" link={'/course'} small={false}>KEMBALI</PrimaryButton>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex items-end gap-4">
                    <img src={starImg} className="w-32 h-32" />
                    <img src={starImg} className="w-44 h-44" />
                    <img src={starImg} className="w-32 h-32" />
                </div>
                <div className="text-center text-xl text-white font-bold">KERJA BAGUS</div>
                <div className="grid grid-cols-2 gap-2 w-full">
                    <div className="bg-light rounded-2xl p-2 flex flex-col items-center">
                        <p className="text-lg font-bold text-[#3EC3A4]">BENAR<span className="text-[#FD4755]">/<span className="text-sm">SALAH</span></span></p>
                        <div className="w-full flex items-center justify-between gap-2 text-sm font-semibold">
                            <img src={yesImg} className="w-7 h-7" />
                            <div className="w-full rounded-full relative bg-[#E0E0E0] h-3">
                                <div className="absolute bg-dark h-full top-0 left-0 rounded-full w-full"></div>
                            </div>
                            <p>5/5</p>
                        </div>
                        <div className="w-full flex items-center justify-between gap-2 text-sm font-semibold">
                            <img src={noImg} className="w-7 h-7" />
                            <div className="w-full rounded-full relative bg-[#E0E0E0] h-3">
                                <div className="absolute bg-dark h-full top-0 left-0 rounded-full w-0"></div>
                            </div>
                            <p>0/5</p>
                        </div>
                    </div>
                    <div className="bg-light rounded-2xl p-2 flex flex-col items-center gap-4">
                        <p className="font-bold text-xl text-[#FFF176] stroke">EXP <span className="text-3xl">+1650</span></p>
                        <div className="h-3 w-[80%] relative rounded-lg rounded-2">
                            <div className="h-8 w-8 rounded-full border-2 border-[#5FC0F6] z-10 bg-white flex absolute justify-center items-center left-0 -translate-x-1/2 top-1/2 -translate-y-1/2">
                                <div className="border-[#4183B2] bg-[#59B1F0] rounded-full w-5 h-5 border-2 flex justify-center items-center">
                                    <p className=" font-bubblegumSansRegular font-bold text-sm text-white text-center" style={{ '-webkit-text-stroke': '0.5px #4183B2' }}>{1}</p>
                                </div>
                            </div>
                            <div className="w-full rounded-full relative bg-[#FFF] h-3">
                                <div className="absolute bg-dark h-full top-0 left-0 rounded-full w-[53%]"></div>
                            </div>
                            <div className="h-8 w-8 rounded-full border-2 border-[#5FC0F6] z-10 bg-white flex absolute justify-center items-center right-0 translate-x-1/2 top-1/2 -translate-y-1/2">
                                <div className="border-[#4183B2] bg-[#59B1F0] rounded-full w-5 h-5 border-2 flex justify-center items-center">
                                    <p className=" font-bubblegumSansRegular font-bold text-sm text-white text-center" style={{ '-webkit-text-stroke': '0.5px #4183B2' }}>{2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default QuizScoring;
import PrimaryButton from "../components/elements/PrimaryButton";
import Navbar from "../components/fragments/Navbar";
import heroAceImg from '../assets/images/hero-ace.png';
import FeatureCard from "../components/elements/FeatureCard";
import modulIconImg from '../assets/images/modul-icon.png';
import pencatatanIconImg from '../assets/images/pencatatan-icon.png';
import savingIconImg from '../assets/images/saving-icon.png';
import kuisIconImg from '../assets/images/kuis-icon.png';

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <section className="w-full h-screen flex justify-center items-center bg-secondary">
                <div className="w-[90%] grid grid-cols-2 h-[50%]">
                    <div className="flex flex-col justify-center items-start text-5xl">
                        <div className="flex flex-col gap-12">
                            <h1 className="font-righteousRegular text-dark">Belajar Keuangan Fun Bersama Ace</h1>
                            <h1 className="font-righteousRegular text-dark">di <span className="text-white drop-shadow-lg">Funance</span></h1>
                            <div className="w-36 z-10">
                                <PrimaryButton btnType="link" small={false}>MULAI</PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center h-full items-center">
                        <img src={heroAceImg} alt="Ace" className="h-[80%]" />
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="relative w-full h-48">
                    <svg className="w-full absolute top-0" viewBox="0 0 1440 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-primary" d="M0 0H1440V102C1440 102 1226.82 190.186 888.5 170C638.485 155.083 354.5 103.5 235 102C115.5 100.5 0 157 0 157V0Z"/>
                    </svg>
                    <svg className="w-full absolute top-0" viewBox="0 0 1440 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-secondary" d="M0 0H1440V63.3603C1440 63.3603 1225.79 171.588 885.819 146.814C634.589 128.507 349.223 65.2012 229.142 63.3603C109.061 61.5194 0 131 0 131V0Z"/>
                    </svg>
                </div>
                <div className="flex flex-col items-center gap-12">
                    <h1 className="text-3xl font-righteousRegular text-dark">Kenapa harus dengan Funance ?</h1>
                    <ul className="flex justify-between w-[70%]">
                        <li>
                            <FeatureCard iconImg={modulIconImg} title="Modul">Modul yang interaktif dan menyenangkan tentu tidak akan membuatmu bosan saat belajar!</FeatureCard>
                        </li>
                        <li>
                            <FeatureCard iconImg={kuisIconImg} title="Kuis">Kerjakan kuis setelah belajar dan dapatkan poin XP mu!</FeatureCard>
                        </li>
                        <li>
                            <FeatureCard iconImg={pencatatanIconImg} title="Catat Uangmu">Kamu bingung kenapa uangmu tiba-tiba habis? Ayo, catat pengeluaranmu!</FeatureCard>
                        </li>
                        <li>
                            <FeatureCard iconImg={savingIconImg} title="Ayo Menabung!">Membiasakan menabung akan membantumu ketika membutuhkan sesuatu di masa depan!</FeatureCard>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
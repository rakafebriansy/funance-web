import IntroductionCard from "../../components/elements/card/IntroductionCard";
import ProgressBar from "../../components/elements/bar/ProgressBar";
import gameControllerImg from "../../assets/images/game-controller.png";
import girlImg from "../../assets/images/girl.png";
import nachosImg from "../../assets/images/nachos.png";
import toyTrainImg from "../../assets/images/toy-train.png";
import othersImg from "../../assets/images/others.png";
import PrimaryButton from "../../components/elements/button/PrimaryButton";

const SecondIntroQuestionPage = () => {
  const percentage = (100 / 3) * 2;

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center">
      <div className="lg:absolute top-10 left-1/2 lg:-translate-x-1/2 w-[80%]">
        <div className="flex items-start justify-center gap-2 flex-col">
          <p className={`font-semibold ${percentage == 100 ? 'text-primary' : 'text-darkText'}`}>{Math.floor(percentage)}{percentage == 100 ? '% siap lanjut menjelajah!' : '% menuju penuh!'}</p>
          <ProgressBar percentage={percentage} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
        <div className="text-xl sm:text-3xl font-bold text-darkText">Kamu biasa memakai uang untuk apa?</div>
        <div className="flex flex-col gap-3">
          <ul className="flex flex-col sm:flex-row gap-3">
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={toyTrainImg}>Beli Mainan</IntroductionCard>
            </li>
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={gameControllerImg}>Top Up Game</IntroductionCard>
            </li>
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={girlImg}>Ditabung</IntroductionCard>
            </li>
          </ul>
          <ul className="flex flex-col sm:flex-row gap-3">
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={nachosImg}>Jajan</IntroductionCard>
            </li>
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={othersImg}>Lainnya</IntroductionCard>
            </li>
          </ul>
        </div>
        <PrimaryButton btnType="link" link="/intro-question/3" small={false}>LANJUT</PrimaryButton>
      </div>
    </div>
  );
};

export default SecondIntroQuestionPage;

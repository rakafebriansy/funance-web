import IntroductionCard from "../../components/elements/IntroductionCard";
import ThinProgressBar from "../../components/elements/ThinProgressBar";
import gameControllerImg from "../../assets/images/game-controller.png";
import girlImg from "../../assets/images/girl.png";
import nachosImg from "../../assets/images/nachos.png";
import toyTrainImg from "../../assets/images/toy-train.png";
import othersImg from "../../assets/images/others.png";
import PrimaryButton from "../../components/elements/PrimaryButton";

const SecondIntroQuestionPage = () => {
  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%]">
        <ThinProgressBar percentage={(100 / 3) * 2} />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-3xl font-bold text-darkText">Kamu biasa memakai uang untuk apa?</div>
        <div className="flex flex-col gap-3">
          <ul className="flex gap-3">
            <li>
              <IntroductionCard image={toyTrainImg}>Beli Mainan</IntroductionCard>
            </li>
            <li>
              <IntroductionCard image={gameControllerImg}>Top Up Game</IntroductionCard>
            </li>
            <li>
              <IntroductionCard image={girlImg}>Ditabung</IntroductionCard>
            </li>
          </ul>
          <ul className="flex gap-3 w-full justify-center">
            <li>
              <IntroductionCard image={nachosImg}>Jajan</IntroductionCard>
            </li>
            <li>
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

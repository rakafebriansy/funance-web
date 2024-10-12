import ProgressBar from "../../components/elements/bar/ProgressBar";
import PrimaryButton from "../../components/elements/button/PrimaryButton";
import TextCard from "../../components/elements/card/TextCard";

const ThirdIntroQuestionPage = () => {
  const percentage = 100;

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%]">
        <div className="flex items-start justify-center gap-2 flex-col">
          <p className="text-darkText font-semibold">{Math.floor(percentage)}% menuju penuh!</p>
          <ProgressBar percentage={percentage} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <h1 className="text-3xl font-bold text-darkText">Okay! Mari kita mulai perjalanan uangmu!</h1>
        <div className="flex flex-col gap-8 justify-center items-center">
          <h2 className="text-3xl font-bold text-darkText">Berapa uang sakumu?</h2>
          <ul className="flex gap-5">
            <li className="cursor-pointer">
              <TextCard>5.000</TextCard>
            </li>
            <li className="cursor-pointer">
              <TextCard>10.000</TextCard>
            </li>
            <li className="cursor-pointer">
              <TextCard>15.000</TextCard>
            </li>
            <li className="cursor-pointer">
              <TextCard>Lebih dari 15.000</TextCard>
            </li>
          </ul>
        </div>
        <PrimaryButton btnType="link" link="/course" small={false}>LANJUT</PrimaryButton>
      </div>
    </div>
  );
};

export default ThirdIntroQuestionPage;

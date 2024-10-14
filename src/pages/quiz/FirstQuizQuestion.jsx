import ProgressBar from "../../components/elements/bar/ProgressBar";
import fiveThousandImg from "../../assets/images/5000.png";
import tenThousandImg from "../../assets/images/10000.jpg";
import twentyThousandImg from "../../assets/images/20000.jpg";
import MoneyCard from "../../components/elements/card/MoneyCard";
import QuizNavigationPartial from "../../components/partials/QuizNavigationPartial";

const FirstQuizQuestionPage = () => {
  const percentage = 100/3;

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <QuizNavigationPartial link="/quiz/2" />=
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%]">
        <div className="flex items-start justify-center gap-2 flex-col">
          <p className={`font-semibold ${percentage == 100 ? 'text-primary' : 'text-darkText'}`}>{Math.floor(percentage)}{percentage == 100 ? '% siap lanjut menjelajah!' : '% menuju penuh!'}</p>
          <ProgressBar percentage={percentage} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 w-[50%]">
        <div className="text-3xl font-bold text-darkText">Kamu ingin membeli mainan seharga Rp5.000, uang pas mana yang akan kamu gunakan ? </div>
        <div className="flex flex-col gap-3">
          <ul className="flex gap-3">
            <li>
              <MoneyCard image={fiveThousandImg}>Rp 5.000</MoneyCard>
            </li>
            <li>
              <MoneyCard image={tenThousandImg}>Rp 10.000</MoneyCard>
            </li>
            <li>
              <MoneyCard image={twentyThousandImg}>Rp 20.000</MoneyCard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstQuizQuestionPage;

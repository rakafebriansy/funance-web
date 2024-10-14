import ProgressBar from "../../components/elements/bar/ProgressBar";
import QuizNavigationPartial from "../../components/partials/QuizNavigationPartial";
import summerArtImg from "../../assets/images/summer-art.png";
import TextCard from "../../components/elements/card/TextCard";

const ThirdQuizQuestionPage = () => {
  const percentage = 100;

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <QuizNavigationPartial link="/quiz/3" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%]">
        <div className="flex justify-center gap-2 flex-col">
          <p className={`font-semibold ${percentage == 100 ? 'text-primary' : 'text-darkText'}`}>{Math.floor(percentage)}{percentage == 100 ? '% siap lanjut menjelajah!' : '% menuju penuh!'}</p>
          <ProgressBar percentage={percentage} />
        </div>
      </div>
      <div className="flex flex-col items-center text-center justify-center gap-6 w-[60%]">
        <div className="text-3xl font-bold text-darkText">Cocokkan uangmu!</div>
        <ul className="flex gap-5">
            <li className="cursor-pointer">
              <TextCard>Langsung mengambil</TextCard>
            </li>
            <li className="cursor-pointer">
              <TextCard>Membayar dengan uang</TextCard>
            </li>
            <li className="cursor-pointer">
              <TextCard>Meminta pada orang lain</TextCard>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default ThirdQuizQuestionPage;

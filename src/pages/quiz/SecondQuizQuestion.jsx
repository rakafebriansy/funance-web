import ProgressBar from "../../components/elements/bar/ProgressBar";
import QuizNavigationPartial from "../../components/partials/QuizNavigationPartial";
import summerArtImg from "../../assets/images/summer-art.png";
import TextCard from "../../components/elements/card/TextCard";

const SecondQuizQuestionPage = () => {
  const percentage = 100/3 * 2;

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
        <div className="text-3xl font-bold text-darkText">Tonton Video Berikut</div>
        <div className="w-full flex justify-center relative">
          <img src={summerArtImg} className="w-[50%] rounded-3xl" />
          <svg className="w-12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 fill-white" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_244_284)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0423 7.99912C18.4698 8.87512 18.4698 10.9493 17.0423 11.8252L3.91839 19.8785C2.42288 20.7962 0.5 19.7201 0.5 17.9655V1.85887C0.5 0.104228 2.42288 -0.971872 3.9184 -0.0541619L17.0423 7.99912Z"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4534 7.99912C31.8809 8.87512 31.8809 10.9493 30.4534 11.8252L17.3295 19.8785C15.834 20.7962 13.9111 19.7201 13.9111 17.9655V1.85887C13.9111 0.104228 15.834 -0.971872 17.3295 -0.0541619L30.4534 7.99912Z"/>
          </g>
          <defs>
          <clipPath id="clip0_244_284">
          <rect width="32" height="20" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        </div>
        <div className="text-3xl font-bold text-darkText w-[55%]">Apa yang mereka lakukan untuk mendapatkan ice cream?</div>
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

export default SecondQuizQuestionPage;

import IntroductionCard from "../../components/elements/card/IntroductionCard";
import ProgressBar from "../../components/elements/bar/ProgressBar";
import PrimaryButton from "../../components/elements/button/PrimaryButton";
import brochureImg from "../../assets/images/brochure.png";
import facebook2Img from "../../assets/images/facebook-2.png";
import friendsImg from "../../assets/images/friends.png";
import googleImg from "../../assets/images/google.png";
import instagramImg from "../../assets/images/instagram.png";
import othersImg from "../../assets/images/others.png";
import tiktokImg from "../../assets/images/tiktok.png";
import youtubeImg from "../../assets/images/youtube.png";

const FirstIntroQuestionPage = () => {
  const percentage = 100/3;

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center">
      <div className="lg:absolute top-10 left-1/2 lg:-translate-x-1/2 w-[80%]">
        <div className="flex items-start justify-center gap-2 flex-col">
          <p className={`font-semibold ${percentage == 100 ? 'text-primary' : 'text-darkText'}`}>{Math.floor(percentage)}{percentage == 100 ? '% siap lanjut menjelajah!' : '% menuju penuh!'}</p>
          <ProgressBar percentage={percentage} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
        <div className="text-xl sm:text-3xl font-bold text-darkText">Kamu tahu Funance darimana?</div>
        <div className="flex flex-col gap-3">
          <ul className="flex flex-col sm:flex-row gap-3">
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={facebook2Img}>Facebook</IntroductionCard>
            </li>
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={instagramImg}>Instagram</IntroductionCard>
            </li>
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={brochureImg}>Brosur</IntroductionCard>
            </li>
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={tiktokImg}>TikTok</IntroductionCard>
            </li>
          </ul>
          <ul className="flex flex-col sm:flex-row gap-3">
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={googleImg}>Google Search</IntroductionCard>
            </li>
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={youtubeImg}>YouTube</IntroductionCard>
            </li>
              <IntroductionCard image={friendsImg}>Keluarga/Teman</IntroductionCard>
            <li className="flex sm:flex-row gap-2 w-full">
              <IntroductionCard image={othersImg}>Lainnya</IntroductionCard>
            </li>
          </ul>
        </div>
        <PrimaryButton btnType="link" link="/intro-question/2" small={false}>LANJUT</PrimaryButton>
      </div>
    </div>
  );
};

export default FirstIntroQuestionPage;

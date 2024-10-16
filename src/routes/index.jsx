import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/auth/SignUp";
import SignInPage from "../pages/auth/SignIn";
import FirstIntroQuestionPage from "../pages/intro-question/FirstIntroQuestion";
import SecondIntroQuestionPage from "../pages/intro-question/SecondIntroQuestion";
import ThirdIntroQuestionPage from "../pages/intro-question/ThirdIntroQuestion";
import CoursePage from "../pages/Course";
import CourseExamplePage from "../pages/course/Example";
import ProfilePage from "../pages/Profile";
import FirstQuizQuestionPage from "../pages/quiz/FirstQuizQuestion";
import SecondQuizQuestionPage from "../pages/quiz/SecondQuizQuestion";
import ThirdQuizQuestionPage from "../pages/quiz/ThirdQuizQuestion";
import QuizScoringPage from "../pages/quiz/QuizScoring";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/intro-question/1" element={<FirstIntroQuestionPage />} />
        <Route path="/intro-question/2" element={<SecondIntroQuestionPage />} />
        <Route path="/intro-question/3" element={<ThirdIntroQuestionPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/1" element={<CourseExamplePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/quiz/1" element={<FirstQuizQuestionPage />} />
        <Route path="/quiz/2" element={<SecondQuizQuestionPage />} />
        <Route path="/quiz/3" element={<ThirdQuizQuestionPage />} />
        <Route path="/quiz/score" element={<QuizScoringPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

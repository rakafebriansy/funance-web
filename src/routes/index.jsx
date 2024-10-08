import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/auth/SignUp";
import SignInPage from "../pages/auth/SignIn";
import FirstIntroQuestionPage from "../pages/intro-question/FirstIntroQuestion";
import SecondIntroQuestionPage from "../pages/intro-question/SecondIntroQuestion";
import ThirdIntroQuestionPage from "../pages/intro-question/ThirdIntroQuestion";
import DashboardPage from "../pages/Dashboard";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/sign-up" element={<SignUpPage/>} />
                <Route path="/sign-in" element={<SignInPage/>} />
                <Route path="/intro-question/1" element={<FirstIntroQuestionPage/>} />
                <Route path="/intro-question/2" element={<SecondIntroQuestionPage/>} />
                <Route path="/intro-question/3" element={<ThirdIntroQuestionPage/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
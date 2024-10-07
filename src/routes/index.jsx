import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/auth/SignUp";
import SignInPage from "../pages/auth/SignIn";
import FirstIntroQuestionPage from "../pages/intro-question/FirstIntroQuestion";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/sign-up" element={<SignUpPage/>} />
                <Route path="/sign-in" element={<SignInPage/>} />
                <Route path="/intro-question/1" element={<FirstIntroQuestionPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
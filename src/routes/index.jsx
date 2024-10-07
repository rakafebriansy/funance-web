import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/sign-up" element={<SignUp/>} />
                <Route path="/sign-in" element={<SignIn/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
import logoImg from "../../assets/images/logo.png";
import profilePictureImg from "../../assets/images/profile-picture.png";
import ExperienceBar from "../elements/bar/ExperienceBar";

const AuthorizedNavbar = () => {
  return (
    <nav className="w-full py-3 px-9 flex justify-between sticky top-0 left-0 items-center shadow-sm border-b bg-white z-50">
      <img src={logoImg} alt="Funance Logo" className="h-5" />
      <div className="flex gap-5 items-center">
        <ExperienceBar percentage={40}>1</ExperienceBar>
        <div className="rounded-full w-10 h-10">
            <img src={profilePictureImg} alt="" className="w-full h-full"/>
        </div>
      </div>
    </nav>
  );
};

export default AuthorizedNavbar;

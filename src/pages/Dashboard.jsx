import SidebarItem from "../components/elements/list-item/SidebarItem";
import AuthorizedNavbar from "../components/fragments/AuthorizedNavbar";
import Sidebar from "../components/fragments/SideBar";
import modulIconImg from '../assets/images/modul-icon.png';
import pencatatanIconImg from '../assets/images/pencatatan-icon.png';
import savingIconImg from '../assets/images/saving-icon.png';
import kuisIconImg from '../assets/images/kuis-icon.png';
import profilePictureImg from "../assets/images/profile-picture.png";
import goldenShieldImg from "../assets/images/golden-shield.png";
import treasureImg from "../assets/images/treasure.png";
import othersImg from "../assets/images/others.png";
import ProgressBar from "../components/elements/bar/ProgressBar";
import RoadmapCard from "../components/elements/card/RoadmapCard";

const Dashboard = ({  }) => {
    return (
        <>
        <AuthorizedNavbar />
        <div className="w-full flex justify-center relative">
            <Sidebar>
                <SidebarItem image={modulIconImg}>BELAJAR</SidebarItem>
                <SidebarItem image={kuisIconImg}>SKOR</SidebarItem>
                <SidebarItem image={pencatatanIconImg}>PENGELUARAN</SidebarItem>
                <SidebarItem image={savingIconImg}>TABUNG</SidebarItem>
                <SidebarItem image={profilePictureImg}>PROFIL</SidebarItem>
                <SidebarItem image={othersImg}>LAINNYA</SidebarItem>
            </Sidebar>
            <ul className="w-[50%]">
                <ul className="h-[100rem] w-full mt-10">
                    <li>
                        <RoadmapCard moduleOrder={1} link="#">Ayo mengenal uang!</RoadmapCard>
                    </li>

                    </ul>
            </ul>
            <div className="fixed h-screen w-[25%] right-0 bg-white">
                <div className="mt-10 w-full flex gap-5 items-center flex-col justify-center">
                    <div className="rounded-2xl border-2 p-4 flex flex-col gap-3 w-[80%]">
                        <p className="text-darkText text-lg font-bold">Buka seluruh modul!</p>
                        <div className="w-full gap flex items-center justify-between gap-4">
                            <img src={goldenShieldImg} class="h-9" />
                            <p className="text-sm text-longText">Selesaikan lebih dari 6 langkah dan siap untuk berkompetisi</p>
                        </div>
                    </div>
                    <div className="rounded-2xl border-2 p-4 flex flex-col gap-3 w-[80%]">
                        <div className="w-full rounded-xl bg-primary text-white text-sm font-bold px-2 py-1">Hasil Petualangan</div>
                        <p className="text-sm text-darkText font-bold">Modul 1</p>
                        <div className="w-full gap flex items-end justify-between gap-4">
                            <img src={treasureImg} class="h-9" />
                            <div className="flex flex-col flex-grow text-xs text-longText gap-2">
                                <p>10%</p>
                                <div className="w-full flex gap-2 items-end">
                                    <ProgressBar percentage={20} height={0.75} />
                                    <p>2/20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Dashboard;
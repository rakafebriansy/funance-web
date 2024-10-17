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
import aceFunImg from "../assets/images/ace-fun.png"
import aceSmartImg from "../assets/images/ace-smart.png"
import aceWandImg from "../assets/images/ace-wand.png"
import ProgressBar from "../components/elements/bar/ProgressBar";
import RoadmapCard from "../components/elements/card/RoadmapCard";
import RoadmapItem from "../components/elements/list-item/RoadmapItem";
import PrimaryButton from "../components/elements/button/PrimaryButton";
import DropdownInput from "../components/elements/input/DropdownInput";

const Expense = ({  }) => {

    const month = [
        'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    return (
        <>
        <AuthorizedNavbar />
        <Sidebar>
            <SidebarItem isActive={true} link="/Expense" image={modulIconImg}>BELAJAR</SidebarItem>
            <SidebarItem link="/" image={kuisIconImg}>SKOR</SidebarItem>
            <SidebarItem link="/" image={pencatatanIconImg}>PENGELUARAN</SidebarItem>
            <SidebarItem link="/" image={savingIconImg}>TABUNG</SidebarItem>
            <SidebarItem link="/profile" image={profilePictureImg}>PROFIL</SidebarItem>
            <SidebarItem link="/" image={othersImg}>LAINNYA</SidebarItem>
        </Sidebar>
        <div className="w-full flex justify-end relative">
            <div className="w-[75%] mt-10 px-14 gap-10 flex flex-col">
                <div className="w-full justify-between flex items-center">
                    <div className="flex gap-5 text-lg items-center">
                        <img src={aceSmartImg} className="h-32" />
                        <div className="flex flex-col gap-3">
                            <p className="font-bold">Pengeluaran</p>
                            <p className="text-longText">Kemana keluarnya uangmu?</p>
                        </div>
                    </div>
                    <div className="rounded-2xl border-2 p-4 flex flex-col gap-3 w-72">
                        <p className="text-darkText text-lg font-bold">Ayo catat pengeluaranmu!</p>
                        <div className="w-full gap flex items-center justify-between gap-4">
                            <img src={goldenShieldImg} class="h-9" />
                            <p className="text-sm text-longText">Catat pengeluaranmu dalam sebulan penuh dan dapatkan strike!</p>
                        </div>
                    </div>
                </div>
                <hr className="border w-full" />
                <div className="w-full flex justify-between items-start">
                    <div className="w-36">
                        <DropdownInput list={month} placeholder="Januari" typed={true} name="kota" />                        
                    </div>
                   <div className="h-full">
                        <div className="w-32">
                            <PrimaryButton btnType="link" link="/course" small={false}>TAMBAH</PrimaryButton>
                        </div>
                   </div>
                </div>
            </div>
        </div>

        </>
    );
};
export default Expense;
import SidebarItem from "../components/elements/SidebarItem";
import AuthorizedNavbar from "../components/fragments/AuthorizedNavbar";
import Sidebar from "../components/fragments/SideBar";
import modulIconImg from '../assets/images/modul-icon.png';
import pencatatanIconImg from '../assets/images/pencatatan-icon.png';
import savingIconImg from '../assets/images/saving-icon.png';
import kuisIconImg from '../assets/images/kuis-icon.png';
import profilePictureImg from "../assets/images/profile-picture.png";
import othersImg from "../assets/images/others.png";

const Dashboard = ({  }) => {
    return (
        <>
        <AuthorizedNavbar />
        <Sidebar>
            <SidebarItem image={modulIconImg}>BELAJAR</SidebarItem>
            <SidebarItem image={kuisIconImg}>SKOR</SidebarItem>
            <SidebarItem image={pencatatanIconImg}>PENGELUARAN</SidebarItem>
            <SidebarItem image={savingIconImg}>TABUNG</SidebarItem>
            <SidebarItem image={profilePictureImg}>PROFIL</SidebarItem>
            <SidebarItem image={othersImg}>LAINNYA</SidebarItem>
        </Sidebar>
        </>
    );
};
export default Dashboard;
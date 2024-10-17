import SidebarItem from "../components/elements/list-item/SidebarItem";
import AuthorizedNavbar from "../components/fragments/AuthorizedNavbar";
import Sidebar from "../components/fragments/SideBar";
import modulIconImg from '../assets/images/modul-icon.png';
import pencatatanIconImg from '../assets/images/pencatatan-icon.png';
import savingIconImg from '../assets/images/saving-icon.png';
import kuisIconImg from '../assets/images/kuis-icon.png';
import profilePictureImg from "../assets/images/profile-picture.png";
import belaComelImg from "../assets/images/bela-comel.png";
import othersImg from "../assets/images/others.png";
import goldIngotBwImg from "../assets/images/gold-ingot-bw.png";
import graduationTogaImg from "../assets/images/graduation-toga.png";
import swordsImg from "../assets/images/swords.png";
import richImg from "../assets/images/rich.png";
import ideaBulbImg from "../assets/images/idea-bulb.png";
import TextInput from "../components/elements/input/TextInput";
import PrimaryButton from "../components/elements/button/PrimaryButton";
import AchievementItem from "../components/elements/list-item/AchievementItem";
import DropdownInput from "../components/elements/input/DropdownInput";

const Profile = ({  }) => {

    const city = ['KOTA JEMBER', 'KOTA SITUBONDO', 'KOTA MOJOKERTO'];

    return (
        <>
        <AuthorizedNavbar />
        <Sidebar>
            <SidebarItem link="/course" image={modulIconImg}>BELAJAR</SidebarItem>
            <SidebarItem link="/" image={kuisIconImg}>SKOR</SidebarItem>
            <SidebarItem link="/" image={pencatatanIconImg}>PENGELUARAN</SidebarItem>
            <SidebarItem link="/" image={savingIconImg}>TABUNG</SidebarItem>
            <SidebarItem isActive={true}  link="/profile" image={profilePictureImg}>PROFIL</SidebarItem>
            <SidebarItem link="/" image={othersImg}>LAINNYA</SidebarItem>
        </Sidebar>
        <div className="w-full flex justify-end relative z-10">
            <div className="w-[60%] flex flex-col gap-10 relative h-screen mt-10">
                <div className="flex justify-start gap-8">
                    <div className="w-36 h-36 rounded-full overflow-hidden">
                        <img src={belaComelImg} className="w-full" />
                    </div>
                    <div className="flex flex-col gap-5 py-2">
                        <p className="text-2xl font-bold">AdikBela_08</p>
                        <div className="flex flex-col gap-1 text-xs">
                            <div className="flex gap-3">
                                <svg className="w-2" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_256_285)">
                                <path d="M7.0275 3.55594C7.0275 3.55594 6.20627 2.44482 4.24961 2.44482C0.360808 2.44482 0.360808 6.88927 4.24961 6.88927C8.1385 6.88927 8.13861 11.3337 4.24972 11.3337C2.58305 11.3337 1.47194 10.2226 1.47194 10.2226" stroke="#CDCDCD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.25 1.3335V12.4446" stroke="#CDCDCD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_256_285">
                                <rect width="9" height="14" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                <p className="text-longText">Rp 130.000</p>
                            </div>
                            <div className="flex gap-3">
                                <svg className="w-2" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_256_289)">
                                <path d="M11 7.71429V1.28571C11 0.578571 10.4176 0 9.70588 0H1.29412C0.582353 0 0 0.578571 0 1.28571V7.71429C0 8.42143 0.582353 9 1.29412 9H9.70588C10.4176 9 11 8.42143 11 7.71429ZM3.88235 7.07143V1.92857L7.76471 4.5L3.88235 7.07143Z" fill="#CDCDCD"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_256_289">
                                <rect width="11" height="9" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                                <p className="text-longText">20/79</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <ul className='flex flex-col gap-2 w-[42%]'>
                        <li className='w-full flex flex-col gap-1'>
                           <div className="w-full ms-3"> <p className="text-lightText">Nama Pengguna</p></div>
                            <TextInput placeholder="AdikBela_08" typed={true} name="nama-pengguna"></TextInput>
                        </li>
                        <li className='w-full flex flex-col gap-1'>
                           <div className="w-full ms-3"> <p className="text-lightText">Kota</p></div>
                            <DropdownInput list={city} placeholder="KOTA BANYUWANGI" typed={true} name="kota" />
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-2 w-[42%]'>
                        <li className='w-full flex flex-col gap-1'>
                           <div className="w-full ms-3"> <p className="text-lightText">Nomor Telepon</p></div>
                            <TextInput placeholder="081234567890" typed={true} name="no-telp"></TextInput>
                        </li>
                        <li className='w-full flex flex-col gap-1'>
                           <div className="w-full ms-3"> <p className="text-lightText">Umur</p></div>
                            <TextInput placeholder="10" typed={true} name="umur">
                                <div className="flex flex-col gap-1">
                                    <svg className="w-2" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z" fill="#D9D9D9"/>
                                    </svg>
                                    <svg className="w-2 rotate-180" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.20759 1.02937C5.6079 0.509358 6.3921 0.509358 6.79241 1.02937L11.6888 7.39001C12.195 8.04757 11.7263 9 10.8964 9H1.10358C0.273737 9 -0.195026 8.04757 0.311171 7.39001L5.20759 1.02937Z" fill="#D9D9D9"/>
                                    </svg>
                                </div>
                            </TextInput>
                        </li>
                    </ul>
                </div>
                <div className="flex w-full justify-between">
                    <div className="w-44">
                        <PrimaryButton btnType="link" link="/sign-in" small={false} outlined={true}>UBAH SANDI</PrimaryButton>
                    </div>
                    <div className="w-44">
                        <PrimaryButton btnType="link" link="/sign-in" small={false}>UBAH</PrimaryButton>
                    </div>
                </div>
                <hr className="border w-full"/>
                <div className="w-full pb-8">
                    <p className="text-lg font-bold">Prestasi</p>
                    <div className="grid grid-cols-2 gap-5">
                        <AchievementItem image={goldIngotBwImg} isDisabled={true} title="Kompetitif">Menabung sejumlah atau lebih dari Rp 50.000.000</AchievementItem>
                        <AchievementItem image={richImg} title="Finansial Cerdas">365 hari mencatat pengeluaran harian secara beruntun</AchievementItem>
                        <AchievementItem image={graduationTogaImg} title="Siswa Teladan">Berhasil menyelesaikan 50 video pembelajaran</AchievementItem>
                        <AchievementItem image={swordsImg} title="Kompetitif">30 hari mengikuti kuis harian secara beruntun</AchievementItem>
                        <AchievementItem image={ideaBulbImg} title="Genius!">Berhasil menyelesaikan 500 kuis atau lebih</AchievementItem>
                    </div>
                </div>
            </div>
            <div className="w-[15%] h-screen"></div>
        </div>
        </>
    );
};
export default Profile;
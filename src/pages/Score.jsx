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
import aceSmartImg from "../assets/images/ace-smart.png"
import ProgressBar from "../components/elements/bar/ProgressBar";
import summerArtImg from "../assets/images/summer-art.png";
import MoneyCard from "../components/elements/card/MoneyCard";
import fiveThousandImg from "../assets/images/5000.png";
import tenThousandImg from "../assets/images/10000.jpg";
import twentyThousandImg from "../assets/images/20000.jpg";
import TextCard from "../components/elements/card/TextCard";


const Score = ({  }) => {

    return (
        <>
        <AuthorizedNavbar />
        <Sidebar>
            <SidebarItem isActive={true} link="/Score" image={modulIconImg}>BELAJAR</SidebarItem>
            <SidebarItem link="/score" image={kuisIconImg}>SKOR</SidebarItem>
            <SidebarItem link="/expense" image={pencatatanIconImg}>PENGELUARAN</SidebarItem>
            <SidebarItem link="/saving" image={savingIconImg}>TABUNG</SidebarItem>
            <SidebarItem link="/profile" image={profilePictureImg}>PROFIL</SidebarItem>
        </Sidebar>
        <div className="fixed h-screen w-[25%] z-40 right-0 flex flex-col bg-white">
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
        <div className="w-full flex justify-center relative">
            <div className="w-[50%] text-darkText mt-10 flex flex-col gap-8">
                <div className="flex gap-5 text-lg items-center">
                    <img src={aceSmartImg} className="h-32" />
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-xl">Score</p>
                        <p className="text-longText text-xl">Lihat dan Kumpulkan poinmu!</p>
                    </div>
                </div>
                <hr className="w-full border" />
                <div className="rounded-xl border border-b-2 border-dark p-3 flex items-center justify-between">
                    <div className="flex gap-6 items-center">
                        <img src={kuisIconImg} alt="" className="w-16" />
                        <p className="text-2xl font-bold ">Langkah 1</p>
                    </div>
                    <div className="w-20">
                        <button className="border-dark bg-primary py-2 px-4 text-white rounded-xl border-2">100%</button>
                    </div>
                </div>
                <div className="w-full flex-col flex gap-5 pb-10">
                    <p className="text-2xl font-bold">Pengerjaan</p>
                    <div className="w-full rounded-xl border-2 border-b-4 flex justify-center p-6 gap-6 items-center flex-col text-center">
                        <p className="text-lg font-bold text-darkText w-[50%]">Kamu ingin membeli mainan seharga Rp5.000, uang pas mana yang akan kamu gunakan ? </p>
                        <div className="flex flex-col gap-3">
                        <ul className="flex gap-3">
                            <li>
                            <MoneyCard image={fiveThousandImg}>Rp 5.000</MoneyCard>
                            </li>
                            <li>
                            <MoneyCard image={tenThousandImg}>Rp 10.000</MoneyCard>
                            </li>
                            <li>
                            <MoneyCard image={twentyThousandImg}>Rp 20.000</MoneyCard>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="w-full rounded-xl border-2 border-b-4 flex justify-center">
                        <div className="flex flex-col items-center text-center justify-center p-6 gap-6 w-[90%]">
                            <p className="text-xl font-bold text-darkText">Tonton Video Berikut</p>
                            <div className="w-full flex justify-center relative">
                            <img src={summerArtImg} className="w-[50%] rounded-3xl" />
                            <svg className="w-12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 fill-white" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_244_284)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0423 7.99912C18.4698 8.87512 18.4698 10.9493 17.0423 11.8252L3.91839 19.8785C2.42288 20.7962 0.5 19.7201 0.5 17.9655V1.85887C0.5 0.104228 2.42288 -0.971872 3.9184 -0.0541619L17.0423 7.99912Z"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.4534 7.99912C31.8809 8.87512 31.8809 10.9493 30.4534 11.8252L17.3295 19.8785C15.834 20.7962 13.9111 19.7201 13.9111 17.9655V1.85887C13.9111 0.104228 15.834 -0.971872 17.3295 -0.0541619L30.4534 7.99912Z"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_244_284">
                            <rect width="32" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </div>
                            <div className="text-xl font-bold text-darkText w-[80%]">Apa yang mereka lakukan untuk mendapatkan ice cream?</div>
                            <ul className="flex gap-5 text-xs w-full">
                                <li className="cursor-pointer">
                                <TextCard>Langsung mengambil</TextCard>
                                </li>
                                <li className="cursor-pointer">
                                <TextCard>Membayar dengan uang</TextCard>
                                </li>
                                <li className="cursor-pointer">
                                <TextCard>Meminta pada orang lain</TextCard>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};
export default Score;
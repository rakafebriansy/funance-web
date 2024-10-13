import SidebarItem from "../../components/elements/list-item/SidebarItem";
import AuthorizedNavbar from "../../components/fragments/AuthorizedNavbar";
import Sidebar from "../../components/fragments/SideBar";
import modulIconImg from '../../assets/images/modul-icon.png';
import pencatatanIconImg from '../../assets/images/pencatatan-icon.png';
import savingIconImg from '../../assets/images/saving-icon.png';
import kuisIconImg from '../../assets/images/kuis-icon.png';
import profilePictureImg from "../../assets/images/profile-picture.png";
import goldenShieldImg from "../../assets/images/golden-shield.png";
import treasureImg from "../../assets/images/treasure.png";
import othersImg from "../../assets/images/others.png";
import goldCoinsImg from "../../assets/images/gold-coins.png";
import summerArtImg from "../../assets/images/summer-art.png";
import aceSmartImg from "../../assets/images/ace-smart.png";
import ProgressBar from "../../components/elements/bar/ProgressBar";
import fiveHundredImg from "../../assets/images/500.png";
import fiveThousandImg from "../../assets/images/5000.png";
import tenThousandImg from "../../assets/images/10000.jpg";
import twentyThousandImg from "../../assets/images/20000.jpg";
import fiftyThousandImg from "../../assets/images/50000.jpg";
import hundredThousandImg from "../../assets/images/100000.jpg";
import ChatItem from "../../components/elements/list-item/ChatItem";

const Example = ({  }) => {

    return (
        <>
        <AuthorizedNavbar />
        <Sidebar>
            <SidebarItem isActive={true} link="/course" image={modulIconImg}>BELAJAR</SidebarItem>
            <SidebarItem link="/" image={kuisIconImg}>SKOR</SidebarItem>
            <SidebarItem link="/" image={pencatatanIconImg}>PENGELUARAN</SidebarItem>
            <SidebarItem link="/" image={savingIconImg}>TABUNG</SidebarItem>
            <SidebarItem link="/profile" image={profilePictureImg}>PROFIL</SidebarItem>
            <SidebarItem link="/" image={othersImg}>LAINNYA</SidebarItem>
        </Sidebar>
        <div className="fixed h-screen w-[25%] right-0 top- flex flex-col bg-white">
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
        <div className="w-full flex justify-center relative pb-10">
            <div className="w-[50%] mt-10 gap-10 flex flex-col">
                <div className="w-full flex gap-8">
                    <img src={aceSmartImg} className="h-44" />
                    <div className="flex flex-col gap-5 justify-center">
                        <p className="font-bold text-xl">Materi Modul 1</p>
                        <p className="text-longText text-xl">Ayo jelajahi dunia uang!</p>
                    </div>
                </div>
                <hr className="border" />
                <div className="bg-light rounded-2xl w-full p-8 flex flex-col gap-3 justify-start">
                    <p className="text-lg text-darkText font-bold">Uang</p>
                    <p className="text-longText">Uang adalah alat yang kita gunakan untuk membeli barang atau layanan. Kita menukarnya dengan sesuatu yang kita inginkan atau butuhkan.</p>
                    <div className="rounded-2xl box-border bg-white w-full p-6 flex justify-between items-center">
                        <p className="font-bold text-primary text-lg">Uang Kertas</p>
                        <img src={pencatatanIconImg} className="w-24" />
                    </div>
                    <div className="rounded-2xl box-border bg-white w-full p-6 flex justify-between items-center">
                        <p className="font-bold text-primary text-lg">Uang Koin</p>
                        <img src={goldCoinsImg} className="w-24" />
                    </div>
                    <p className="text-lg mt-5 text-darkText font-bold">Kenapa kita butuh uang?</p>
                    <p className="text-longText">Setiap kali kita ingin membeli sesuatu, kita harus memberikan uang sebagai gantinya. Kamu bisa menggunakan  uang untuk membeli makanan, mainan, dan pakaian, dan masih banyak lagi.</p>
                    <div className="w-full flex justify-center relative">
                        <img src={summerArtImg} className="w-[70%] rounded-3xl" />
                        <svg className="w-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 fill-white" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                <div className="w-full flex flex-col gap-3">
                    <p className="text-lg text-darkText font-bold">Menggunakan uang</p>
                    <p className="text-longText">Cuaca sedang panas dan kamu ingin sekali membeli ice cream, dan kamu melihat ada toko ice cream, ayo kita beli!</p>
                    <ul className="px-2 py-4 flex flex-col gap-2 text-darkText">
                        <li className="flex justify-start">
                            <ChatItem isSender={false}>Halo, aku ingin membeli 1 ice cream coklat</ChatItem>
                        </li>
                        <li className="flex justify-end">
                            <ChatItem isSender={true}>Totalnya Rp10.000 ya</ChatItem>
                        </li>
                        <li className="flex justify-start">
                            <ChatItem isSender={false}>Baiklah, ini uangnya</ChatItem>
                        </li>
                        <li className="flex justify-end">
                            <ChatItem isSender={true}>Terimakasih! Selamat menikmati</ChatItem>
                        </li>
                    </ul>
                </div>
                <div className="w-full gap-3 flex flex-col">
                    <p className="text-lg text-darkText font-bold">Uang Rp 10.000</p>
                    <p className="text-longText">Kamu telah berhasil membeli ice cream dengan uang Rp 10.000, yeayy!</p>
                    <div className="w-full justify-center flex py-10">
                        <img src={tenThousandImg} className="w-[50%]" />
                    </div>
                </div>
                <div className="bg-light rounded-2xl w-full p-8 flex flex-col gap-3 justify-start">
                    <p className="text-lg text-darkText font-bold">Uang di dompetmu</p>
                    <p className="text-longText">Kamu telah berhasil membeli ice cream dengan uang Rp 10.000, yeayy!</p>
                    <ul className="w-full flex flex-col justify-start gap-8">
                        <li className="flex gap-6 items-center">
                            <div className="w-36 bg-primary border-b-4 border-b-dark h-24 flex justify-center items-center rounded-xl">
                                <img src={fiveThousandImg} className="w-[60%]" />
                            </div>
                            <p>Rp 5.000</p>
                        </li>
                        <li className="flex gap-6 items-center">
                            <div className="w-36 bg-primary border-b-4 border-b-dark h-24 flex justify-center items-center rounded-xl">
                                <img src={tenThousandImg} className="w-[60%]" />
                            </div>
                            <p>Rp 10.000</p>
                        </li>
                        <li className="flex gap-6 items-center">
                            <div className="w-36 bg-primary border-b-4 border-b-dark h-24 flex justify-center items-center rounded-xl">
                                <img src={twentyThousandImg} className="w-[60%]" />
                            </div>
                            <p>Rp 20.000</p>
                        </li>
                        <li className="flex gap-6 items-center">
                            <div className="w-36 bg-primary border-b-4 border-b-dark h-24 flex justify-center items-center rounded-xl">
                                <img src={fiftyThousandImg} className="w-[60%]" />
                            </div>
                            <p>Rp 50.000</p>
                        </li>
                        <li className="flex gap-6 items-center">
                            <div className="w-36 bg-primary border-b-4 border-b-dark h-24 flex justify-center items-center rounded-xl">
                                <img src={hundredThousandImg} className="w-[60%]" />
                            </div>
                            <p>Rp 100.000</p>
                        </li>
                        <li className="flex gap-6 items-center">
                            <div className="w-36 bg-primary border-b-4 border-b-dark h-24 flex justify-center items-center rounded-xl">
                                <img src={fiveHundredImg} className="w-[60%]" />
                            </div>
                            <p>Rp 500</p>
                        </li>
                    </ul>                    
                </div>
            </div>
        </div>

        </>
    );
};
export default Example;
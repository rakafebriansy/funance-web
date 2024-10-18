import SidebarItem from "../components/elements/list-item/SidebarItem";
import AuthorizedNavbar from "../components/fragments/AuthorizedNavbar";
import Sidebar from "../components/fragments/SideBar";
import modulIconImg from '../assets/images/modul-icon.png';
import pencatatanIconImg from '../assets/images/pencatatan-icon.png';
import savingIconImg from '../assets/images/saving-icon.png';
import kuisIconImg from '../assets/images/kuis-icon.png';
import profilePictureImg from "../assets/images/profile-picture.png";
import goldenShieldImg from "../assets/images/golden-shield.png";
import othersImg from "../assets/images/others.png";
import aceSmartImg from "../assets/images/ace-smart.png"
import PrimaryButton from "../components/elements/button/PrimaryButton";
import DropdownInput from "../components/elements/input/DropdownInput";
import { useRef, useState } from "react";

const Expense = ({  }) => {
    const [selected, setSelected] = useState('semuanya');


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
                <div className="w-full flex flex-col justify-start gap-5">
                    <p className="text-3xl font-bold">Total Pengeluaran</p>
                    <p className="text-xl font-bold">Rp 75.000</p>
                    <div className="">
                    <div className="w-full h-96 flex">
                        <ul className="w-[10%] h-full text-longText text-[0.8rem] flex flex-col justify-between">
                            <li>90</li>
                            <li>80</li>
                            <li>70</li>
                            <li>60</li>
                            <li>50</li>
                            <li>40</li>
                            <li>30</li>
                            <li>20</li>
                            <li>10</li>
                        </ul>
                        <div className="flex-grow gap-3 grid grid-cols-12 items-end">
                            <div className="bg-light rounded-md h-[30%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[40%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[20%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[50%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[60%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[15%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[10%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[80%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[50%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[70%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[20%] hover:bg-primary hover:drop-shadow-xl"></div>
                            <div className="bg-light rounded-md h-[30%] hover:bg-primary hover:drop-shadow-xl"></div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end mt-2 p-3 border-t ">
                        <div className="w-[90%]">
                            <div className="flex-grow gap-3 grid grid-cols-12 items-end text-xs">
                                <p>Jan</p>
                                <p>Feb</p>
                                <p>Mar</p>
                                <p>Apr</p>
                                <p>Mei</p>
                                <p>Jun</p>
                                <p>Jul</p>
                                <p>Agu</p>
                                <p>Sep</p>
                                <p>Okt</p>
                                <p>Nov</p>
                                <p>Des</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start gap-5 pb-10">
                    <p className="text-3xl font-bold">Catatan</p>
                    <div class="flex flex-col shadow rounded-xl overflow-hidden border">
                        <div className="border-x border-t flex gap-3 cursor-pointer font-bold text-primary text-xs w-full px-6">
                            <div className={`h-full py-3 w-fit px-3 ${selected == 'semuanya' && 'border-b-2 border-primary'}`} onClick={() => setSelected('semuanya')}>SEMUANYA</div>
                            <div className={`h-full py-3 w-fit px-3 ${selected == 'kategori' && 'border-b-2 border-primary'}`} onClick={() => setSelected('kategori')}>KATEGORI</div>
                        </div>
                        <div class="-m-1.5 overflow-x-auto">
                            <div class="p-1.5 min-w-full inline-block align-middle">
                                <div class="border overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead>
                                        <tr class="divide-gray-200 dark:divide-neutral-700">
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-neutral-500">
                                                <div className="flex gap-1">
                                                    <p>Nama</p>
                                                    <div className="flex flex-col">
                                                        <svg className="w-2" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.43911 1.19481C3.51577 1.06595 3.62275 0.95962 3.7499 0.88588C3.87706 0.812141 4.02018 0.773438 4.16571 0.773438C4.31124 0.773438 4.45436 0.812141 4.58152 0.88588C4.70867 0.95962 4.81565 1.06595 4.89231 1.19481L7.62775 5.74764C7.70878 5.88269 7.75356 6.0379 7.75742 6.1971C7.76128 6.3563 7.72408 6.51367 7.6497 6.6528C7.57532 6.79194 7.46649 6.90774 7.33453 6.98816C7.20257 7.06858 7.05232 7.11066 6.89944 7.11002H1.42856C1.27626 7.10939 1.12689 7.06638 0.995894 6.98545C0.864901 6.90452 0.757044 6.7886 0.683479 6.64969C0.609915 6.51077 0.573315 6.35391 0.577466 6.19532C0.581617 6.03673 0.626367 5.88218 0.707088 5.74764L3.43911 1.19481Z" fill="#838D94"/>
                                                        </svg>
                                                        <svg className="w-2 rotate-180" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.43911 1.19481C3.51577 1.06595 3.62275 0.95962 3.7499 0.88588C3.87706 0.812141 4.02018 0.773438 4.16571 0.773438C4.31124 0.773438 4.45436 0.812141 4.58152 0.88588C4.70867 0.95962 4.81565 1.06595 4.89231 1.19481L7.62775 5.74764C7.70878 5.88269 7.75356 6.0379 7.75742 6.1971C7.76128 6.3563 7.72408 6.51367 7.6497 6.6528C7.57532 6.79194 7.46649 6.90774 7.33453 6.98816C7.20257 7.06858 7.05232 7.11066 6.89944 7.11002H1.42856C1.27626 7.10939 1.12689 7.06638 0.995894 6.98545C0.864901 6.90452 0.757044 6.7886 0.683479 6.64969C0.609915 6.51077 0.573315 6.35391 0.577466 6.19532C0.581617 6.03673 0.626367 5.88218 0.707088 5.74764L3.43911 1.19481Z" fill="#838D94"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-neutral-500">
                                            <div className="flex gap-1">
                                                    <p>Total Harga</p>
                                                    <div className="flex flex-col">
                                                        <svg className="w-2" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.43911 1.19481C3.51577 1.06595 3.62275 0.95962 3.7499 0.88588C3.87706 0.812141 4.02018 0.773438 4.16571 0.773438C4.31124 0.773438 4.45436 0.812141 4.58152 0.88588C4.70867 0.95962 4.81565 1.06595 4.89231 1.19481L7.62775 5.74764C7.70878 5.88269 7.75356 6.0379 7.75742 6.1971C7.76128 6.3563 7.72408 6.51367 7.6497 6.6528C7.57532 6.79194 7.46649 6.90774 7.33453 6.98816C7.20257 7.06858 7.05232 7.11066 6.89944 7.11002H1.42856C1.27626 7.10939 1.12689 7.06638 0.995894 6.98545C0.864901 6.90452 0.757044 6.7886 0.683479 6.64969C0.609915 6.51077 0.573315 6.35391 0.577466 6.19532C0.581617 6.03673 0.626367 5.88218 0.707088 5.74764L3.43911 1.19481Z" fill="#838D94"/>
                                                        </svg>
                                                        <svg className="w-2 rotate-180" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.43911 1.19481C3.51577 1.06595 3.62275 0.95962 3.7499 0.88588C3.87706 0.812141 4.02018 0.773438 4.16571 0.773438C4.31124 0.773438 4.45436 0.812141 4.58152 0.88588C4.70867 0.95962 4.81565 1.06595 4.89231 1.19481L7.62775 5.74764C7.70878 5.88269 7.75356 6.0379 7.75742 6.1971C7.76128 6.3563 7.72408 6.51367 7.6497 6.6528C7.57532 6.79194 7.46649 6.90774 7.33453 6.98816C7.20257 7.06858 7.05232 7.11066 6.89944 7.11002H1.42856C1.27626 7.10939 1.12689 7.06638 0.995894 6.98545C0.864901 6.90452 0.757044 6.7886 0.683479 6.64969C0.609915 6.51077 0.573315 6.35391 0.577466 6.19532C0.581617 6.03673 0.626367 5.88218 0.707088 5.74764L3.43911 1.19481Z" fill="#838D94"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-neutral-500">
                                            <div className="flex gap-1">
                                                    <p>Tanggal</p>
                                                    <div className="flex flex-col">
                                                        <svg className="w-2" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.43911 1.19481C3.51577 1.06595 3.62275 0.95962 3.7499 0.88588C3.87706 0.812141 4.02018 0.773438 4.16571 0.773438C4.31124 0.773438 4.45436 0.812141 4.58152 0.88588C4.70867 0.95962 4.81565 1.06595 4.89231 1.19481L7.62775 5.74764C7.70878 5.88269 7.75356 6.0379 7.75742 6.1971C7.76128 6.3563 7.72408 6.51367 7.6497 6.6528C7.57532 6.79194 7.46649 6.90774 7.33453 6.98816C7.20257 7.06858 7.05232 7.11066 6.89944 7.11002H1.42856C1.27626 7.10939 1.12689 7.06638 0.995894 6.98545C0.864901 6.90452 0.757044 6.7886 0.683479 6.64969C0.609915 6.51077 0.573315 6.35391 0.577466 6.19532C0.581617 6.03673 0.626367 5.88218 0.707088 5.74764L3.43911 1.19481Z" fill="#838D94"/>
                                                        </svg>
                                                        <svg className="w-2 rotate-180" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.43911 1.19481C3.51577 1.06595 3.62275 0.95962 3.7499 0.88588C3.87706 0.812141 4.02018 0.773438 4.16571 0.773438C4.31124 0.773438 4.45436 0.812141 4.58152 0.88588C4.70867 0.95962 4.81565 1.06595 4.89231 1.19481L7.62775 5.74764C7.70878 5.88269 7.75356 6.0379 7.75742 6.1971C7.76128 6.3563 7.72408 6.51367 7.6497 6.6528C7.57532 6.79194 7.46649 6.90774 7.33453 6.98816C7.20257 7.06858 7.05232 7.11066 6.89944 7.11002H1.42856C1.27626 7.10939 1.12689 7.06638 0.995894 6.98545C0.864901 6.90452 0.757044 6.7886 0.683479 6.64969C0.609915 6.51077 0.573315 6.35391 0.577466 6.19532C0.581617 6.03673 0.626367 5.88218 0.707088 5.74764L3.43911 1.19481Z" fill="#838D94"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 dark:text-neutral-500">
                                            <div className="flex gap-1">
                                                    <p>Kategori</p>
                                                    <div className="flex flex-col">
                                                        <svg className="w-2" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.43911 1.19481C3.51577 1.06595 3.62275 0.95962 3.7499 0.88588C3.87706 0.812141 4.02018 0.773438 4.16571 0.773438C4.31124 0.773438 4.45436 0.812141 4.58152 0.88588C4.70867 0.95962 4.81565 1.06595 4.89231 1.19481L7.62775 5.74764C7.70878 5.88269 7.75356 6.0379 7.75742 6.1971C7.76128 6.3563 7.72408 6.51367 7.6497 6.6528C7.57532 6.79194 7.46649 6.90774 7.33453 6.98816C7.20257 7.06858 7.05232 7.11066 6.89944 7.11002H1.42856C1.27626 7.10939 1.12689 7.06638 0.995894 6.98545C0.864901 6.90452 0.757044 6.7886 0.683479 6.64969C0.609915 6.51077 0.573315 6.35391 0.577466 6.19532C0.581617 6.03673 0.626367 5.88218 0.707088 5.74764L3.43911 1.19481Z" fill="#838D94"/>
                                                        </svg>
                                                        <svg className="w-2 rotate-180" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.43911 1.19481C3.51577 1.06595 3.62275 0.95962 3.7499 0.88588C3.87706 0.812141 4.02018 0.773438 4.16571 0.773438C4.31124 0.773438 4.45436 0.812141 4.58152 0.88588C4.70867 0.95962 4.81565 1.06595 4.89231 1.19481L7.62775 5.74764C7.70878 5.88269 7.75356 6.0379 7.75742 6.1971C7.76128 6.3563 7.72408 6.51367 7.6497 6.6528C7.57532 6.79194 7.46649 6.90774 7.33453 6.98816C7.20257 7.06858 7.05232 7.11066 6.89944 7.11002H1.42856C1.27626 7.10939 1.12689 7.06638 0.995894 6.98545C0.864901 6.90452 0.757044 6.7886 0.683479 6.64969C0.609915 6.51077 0.573315 6.35391 0.577466 6.19532C0.581617 6.03673 0.626367 5.88218 0.707088 5.74764L3.43911 1.19481Z" fill="#838D94"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 dark:text-neutral-500">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">Boneka</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm">Rp 40.000</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm">15/09/2024</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm">Mainan</td>
                                        </tr>
                                    </tbody>
                                    </table>
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
export default Expense;
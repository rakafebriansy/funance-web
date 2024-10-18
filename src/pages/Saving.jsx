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
import { useState } from "react";
import FormModal from "../components/elements/modal/FormModal";
import TextInput from "../components/elements/input/TextInput";
import ProgressBar from "../components/elements/bar/ProgressBar";

const Saving = ({  }) => {

    const [isTrigger, setIsTrigger] = useState(false);
    const year = [2023,2022,2021];

    return (
        <>
        <FormModal title="Tambah Catatan" btnTitle="TAMBAH" size="w-[80%]" isTrigger={isTrigger} setIsTrigger={setIsTrigger}>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-4">
                    <TextInput placeholder="Target" name="Target" />
                    <TextInput placeholder="Harga" name="Harga" />
                </div>
                <div className="flex gap-4">
                    <TextInput placeholder="Waktu Awal" name="Waktu Awal" >
                        <svg className="w-2" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.78125 11.25H4.21875C3.96094 11.25 3.75 11.0391 3.75 10.7812V9.21875C3.75 8.96094 3.96094 8.75 4.21875 8.75H5.78125C6.03906 8.75 6.25 8.96094 6.25 9.21875V10.7812C6.25 11.0391 6.03906 11.25 5.78125 11.25ZM10 10.7812V9.21875C10 8.96094 9.78906 8.75 9.53125 8.75H7.96875C7.71094 8.75 7.5 8.96094 7.5 9.21875V10.7812C7.5 11.0391 7.71094 11.25 7.96875 11.25H9.53125C9.78906 11.25 10 11.0391 10 10.7812ZM13.75 10.7812V9.21875C13.75 8.96094 13.5391 8.75 13.2812 8.75H11.7188C11.4609 8.75 11.25 8.96094 11.25 9.21875V10.7812C11.25 11.0391 11.4609 11.25 11.7188 11.25H13.2812C13.5391 11.25 13.75 11.0391 13.75 10.7812ZM10 14.5312V12.9688C10 12.7109 9.78906 12.5 9.53125 12.5H7.96875C7.71094 12.5 7.5 12.7109 7.5 12.9688V14.5312C7.5 14.7891 7.71094 15 7.96875 15H9.53125C9.78906 15 10 14.7891 10 14.5312ZM6.25 14.5312V12.9688C6.25 12.7109 6.03906 12.5 5.78125 12.5H4.21875C3.96094 12.5 3.75 12.7109 3.75 12.9688V14.5312C3.75 14.7891 3.96094 15 4.21875 15H5.78125C6.03906 15 6.25 14.7891 6.25 14.5312ZM13.75 14.5312V12.9688C13.75 12.7109 13.5391 12.5 13.2812 12.5H11.7188C11.4609 12.5 11.25 12.7109 11.25 12.9688V14.5312C11.25 14.7891 11.4609 15 11.7188 15H13.2812C13.5391 15 13.75 14.7891 13.75 14.5312ZM17.5 4.375V18.125C17.5 19.1602 16.6602 20 15.625 20H1.875C0.839844 20 0 19.1602 0 18.125V4.375C0 3.33984 0.839844 2.5 1.875 2.5H3.75V0.46875C3.75 0.210938 3.96094 0 4.21875 0H5.78125C6.03906 0 6.25 0.210938 6.25 0.46875V2.5H11.25V0.46875C11.25 0.210938 11.4609 0 11.7188 0H13.2812C13.5391 0 13.75 0.210938 13.75 0.46875V2.5H15.625C16.6602 2.5 17.5 3.33984 17.5 4.375ZM15.625 17.8906V6.25H1.875V17.8906C1.875 18.0195 1.98047 18.125 2.10938 18.125H15.3906C15.5195 18.125 15.625 18.0195 15.625 17.8906Z" fill="#E5E5E5"/>
                        </svg>
                    </TextInput>
                    <TextInput placeholder="Target Waktu" name="Target Waktu" >
                        <svg className="w-2" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.78125 11.25H4.21875C3.96094 11.25 3.75 11.0391 3.75 10.7812V9.21875C3.75 8.96094 3.96094 8.75 4.21875 8.75H5.78125C6.03906 8.75 6.25 8.96094 6.25 9.21875V10.7812C6.25 11.0391 6.03906 11.25 5.78125 11.25ZM10 10.7812V9.21875C10 8.96094 9.78906 8.75 9.53125 8.75H7.96875C7.71094 8.75 7.5 8.96094 7.5 9.21875V10.7812C7.5 11.0391 7.71094 11.25 7.96875 11.25H9.53125C9.78906 11.25 10 11.0391 10 10.7812ZM13.75 10.7812V9.21875C13.75 8.96094 13.5391 8.75 13.2812 8.75H11.7188C11.4609 8.75 11.25 8.96094 11.25 9.21875V10.7812C11.25 11.0391 11.4609 11.25 11.7188 11.25H13.2812C13.5391 11.25 13.75 11.0391 13.75 10.7812ZM10 14.5312V12.9688C10 12.7109 9.78906 12.5 9.53125 12.5H7.96875C7.71094 12.5 7.5 12.7109 7.5 12.9688V14.5312C7.5 14.7891 7.71094 15 7.96875 15H9.53125C9.78906 15 10 14.7891 10 14.5312ZM6.25 14.5312V12.9688C6.25 12.7109 6.03906 12.5 5.78125 12.5H4.21875C3.96094 12.5 3.75 12.7109 3.75 12.9688V14.5312C3.75 14.7891 3.96094 15 4.21875 15H5.78125C6.03906 15 6.25 14.7891 6.25 14.5312ZM13.75 14.5312V12.9688C13.75 12.7109 13.5391 12.5 13.2812 12.5H11.7188C11.4609 12.5 11.25 12.7109 11.25 12.9688V14.5312C11.25 14.7891 11.4609 15 11.7188 15H13.2812C13.5391 15 13.75 14.7891 13.75 14.5312ZM17.5 4.375V18.125C17.5 19.1602 16.6602 20 15.625 20H1.875C0.839844 20 0 19.1602 0 18.125V4.375C0 3.33984 0.839844 2.5 1.875 2.5H3.75V0.46875C3.75 0.210938 3.96094 0 4.21875 0H5.78125C6.03906 0 6.25 0.210938 6.25 0.46875V2.5H11.25V0.46875C11.25 0.210938 11.4609 0 11.7188 0H13.2812C13.5391 0 13.75 0.210938 13.75 0.46875V2.5H15.625C16.6602 2.5 17.5 3.33984 17.5 4.375ZM15.625 17.8906V6.25H1.875V17.8906C1.875 18.0195 1.98047 18.125 2.10938 18.125H15.3906C15.5195 18.125 15.625 18.0195 15.625 17.8906Z" fill="#E5E5E5"/>
                        </svg>
                    </TextInput>
                </div>
            </div>
        </FormModal>
        <AuthorizedNavbar />
        <Sidebar>
            <SidebarItem isActive={true} link="/course" image={modulIconImg}>BELAJAR</SidebarItem>
            <SidebarItem link="/score" image={kuisIconImg}>SKOR</SidebarItem>
            <SidebarItem link="/expense" image={pencatatanIconImg}>PENGELUARAN</SidebarItem>
            <SidebarItem link="/saving" image={savingIconImg}>TABUNG</SidebarItem>
            <SidebarItem link="/profile" image={profilePictureImg}>PROFIL</SidebarItem>
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
                    <div className="flex flex-col gap-3">
                        <div className="rounded-2xl border-2 p-4 flex flex-col gap-3 w-72">
                            <p className="text-darkText text-lg font-bold">Ayo capai target!</p>
                            <div className="w-full gap flex items-center justify-between gap-4">
                                <img src={goldenShieldImg} class="h-9" />
                                <p className="text-sm text-longText">Mulai buat target menabung dan selesaikan target menabungmu untuk strike!</p>
                            </div>
                        </div>
                        <div className="rounded-2xl border-2 p-4 flex flex-col gap-3 w-72">
                            <p className="text-darkText text-lg font-bold">Total XP</p>
                            <div className="w-full gap flex items-center justify-center gap-4">
                                <div className="h-8 w-[80%] relative rounded-lg flex items-center rounded-2">
                                    <div className="h-10 w-10 rounded-full border-2 border-[#5FC0F6] z-10 bg-white flex absolute justify-center items-center left-0 -translate-x-1/2 top-1/2 -translate-y-1/2">
                                        <div className="border-[#4183B2] bg-[#59B1F0] rounded-full w-7 h-7 border-2 flex justify-center items-center">
                                            <p className=" font-bubblegumSansRegular font-bold text-base text-white text-center" style={{ '-webkit-text-stroke': '0.5px #4183B2' }}>{1}</p>
                                        </div>
                                    </div>
                                    <div className="w-full rounded-full relative bg-[#e9e9e9] h-3">
                                        <div className="absolute bg-primary h-full left-0 rounded-full w-[38%] items-center flex justify-center text-white">
                                            <p className="text-[0.6rem]">+1650</p>
                                        </div>
                                    </div>
                                    <div className="h-10 w-10 rounded-full border-2 border-[#5FC0F6] z-10 bg-white flex absolute justify-center items-center right-0 translate-x-1/2 top-1/2 -translate-y-1/2">
                                        <div className="border-[#4183B2] bg-[#59B1F0] rounded-full w-7 h-7 border-2 flex justify-center items-center">
                                            <p className=" font-bubblegumSansRegular font-bold text-base text-white text-center" style={{ '-webkit-text-stroke': '0.5px #4183B2' }}>{2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border w-full" />
                <div className="w-full flex justify-between items-start">
                    <div className="w-36">
                        <DropdownInput list={year} placeholder="2024" typed={true} name="kota" />                        
                    </div>
                   <div className="h-full">
                        <div className="w-32">
                            <PrimaryButton btnType="button" onclick={() => setIsTrigger(true)} small={false}>BUAT TARGET</PrimaryButton>
                        </div>
                   </div>
                </div>
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full rounded-xl border border-primary overflow-hidden">
                        <div className="w-full flex justify-between p-3 items-center bg-primary">
                            <div className="text-white">
                                <p className="text-lg font-bold">Beli Boneka Barbie</p>
                                <p className="text-xs">12 Januari - 12 Maret</p>
                            </div>
                            <div className="border-2 rounded-xl text-xs p-2 bg-white fill-primary flex items-center justify-center gap-2">
                                <svg className="w-5 fill-primary" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-primary" d="M26.395 0.599121H2.405C1.075 0.599121 0 1.67412 0 2.99912V20.5991C0 21.9241 1.075 22.9991 2.405 22.9991H26.395C27.725 22.9991 28.8 21.9241 28.8 20.5991V2.99912C28.8 1.67412 27.725 0.599121 26.395 0.599121ZM2.705 2.99912H26.095C26.26 2.99912 26.395 3.13412 26.395 3.29912V5.39912H2.405V3.29912C2.405 3.13412 2.54 2.99912 2.705 2.99912ZM26.095 20.5991H2.705C2.54 20.5991 2.405 20.4641 2.405 20.2991V11.7991H26.395V20.2991C26.395 20.4641 26.26 20.5991 26.095 20.5991ZM9.6 15.5991V17.5991C9.6 17.9291 9.33 18.1991 9 18.1991H5.4C5.07 18.1991 4.8 17.9291 4.8 17.5991V15.5991C4.8 15.2691 5.07 14.9991 5.4 14.9991H9C9.33 14.9991 9.6 15.2691 9.6 15.5991ZM19.2 15.5991V17.5991C19.2 17.9291 18.93 18.1991 18.6 18.1991H11.8C11.47 18.1991 11.2 17.9291 11.2 17.5991V15.5991C11.2 15.2691 11.47 14.9991 11.8 14.9991H18.6C18.93 14.9991 19.2 15.2691 19.2 15.5991Z" fill="currentColor"/>
                                </svg>
                                <p className="font-bold text-primary">TAMBAH UANG</p>
                            </div>
                        </div>
                        <div className="p-3 flex flex-col w-full gap-4">
                            <p className="text-lg font-bold">25% menuju penuh</p>
                            <div className="flex items-start justify-center gap-2 flex-col">
                                <div className="w-full flex justify-between">
                                    <p className={`font-bold text-xs`}>Rp 10.000</p>
                                    <p className={`font-bold text-xs`}>Rp 60.000</p>
                                </div>
                                <ProgressBar percentage={100/5} />
                                <div className="w-full flex justify-between">
                                    <p className={`font-bold text-xs text-longText`}>12 Jan</p>
                                    <p className={`font-bold text-xs text-longText`}>12 Mar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full rounded-xl border border-primary overflow-hidden">
                        <div className="w-full flex justify-between p-3 items-center bg-primary">
                            <div className="text-white">
                                <p className="text-lg font-bold">Beli Komik</p>
                                <p className="text-xs">12 Januari - 12 Februari</p>
                            </div>
                            <div className="border-2 rounded-xl text-xs p-2 bg-white fill-primary flex items-center justify-center gap-2">
                                <svg className="w-5 fill-primary" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-primary" d="M26.395 0.599121H2.405C1.075 0.599121 0 1.67412 0 2.99912V20.5991C0 21.9241 1.075 22.9991 2.405 22.9991H26.395C27.725 22.9991 28.8 21.9241 28.8 20.5991V2.99912C28.8 1.67412 27.725 0.599121 26.395 0.599121ZM2.705 2.99912H26.095C26.26 2.99912 26.395 3.13412 26.395 3.29912V5.39912H2.405V3.29912C2.405 3.13412 2.54 2.99912 2.705 2.99912ZM26.095 20.5991H2.705C2.54 20.5991 2.405 20.4641 2.405 20.2991V11.7991H26.395V20.2991C26.395 20.4641 26.26 20.5991 26.095 20.5991ZM9.6 15.5991V17.5991C9.6 17.9291 9.33 18.1991 9 18.1991H5.4C5.07 18.1991 4.8 17.9291 4.8 17.5991V15.5991C4.8 15.2691 5.07 14.9991 5.4 14.9991H9C9.33 14.9991 9.6 15.2691 9.6 15.5991ZM19.2 15.5991V17.5991C19.2 17.9291 18.93 18.1991 18.6 18.1991H11.8C11.47 18.1991 11.2 17.9291 11.2 17.5991V15.5991C11.2 15.2691 11.47 14.9991 11.8 14.9991H18.6C18.93 14.9991 19.2 15.2691 19.2 15.5991Z" fill="currentColor"/>
                                </svg>
                                <p className="font-bold text-primary">TAMBAH UANG</p>
                            </div>
                        </div>
                        <div className="p-3 flex flex-col w-full gap-4">
                            <p className="text-lg font-bold">50% menuju penuh</p>
                            <div className="flex items-start justify-center gap-2 flex-col">
                                <div className="w-full flex justify-between">
                                    <p className={`font-bold text-xs`}>Rp 10.000</p>
                                    <p className={`font-bold text-xs`}>Rp 20.000</p>
                                </div>
                                <ProgressBar percentage={100/2} />
                                <div className="w-full flex justify-between">
                                    <p className={`font-bold text-xs text-longText`}>12 Jan</p>
                                    <p className={`font-bold text-xs text-longText`}>12 Feb</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5 pb-10">
                    <div className="w-full rounded-xl border border-primary overflow-hidden">
                        <div className="w-full flex justify-between p-3 items-center bg-primary">
                            <div className="text-white">
                                <p className="text-lg font-bold">Beli Spidol Warna</p>
                                <p className="text-xs">12 Januari - 18 Januari</p>
                            </div>
                            <div className="border-2 rounded-xl text-xs p-2 bg-white fill-primary flex items-center justify-center gap-2">
                                <svg className="w-5 fill-primary" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-primary" d="M26.395 0.599121H2.405C1.075 0.599121 0 1.67412 0 2.99912V20.5991C0 21.9241 1.075 22.9991 2.405 22.9991H26.395C27.725 22.9991 28.8 21.9241 28.8 20.5991V2.99912C28.8 1.67412 27.725 0.599121 26.395 0.599121ZM2.705 2.99912H26.095C26.26 2.99912 26.395 3.13412 26.395 3.29912V5.39912H2.405V3.29912C2.405 3.13412 2.54 2.99912 2.705 2.99912ZM26.095 20.5991H2.705C2.54 20.5991 2.405 20.4641 2.405 20.2991V11.7991H26.395V20.2991C26.395 20.4641 26.26 20.5991 26.095 20.5991ZM9.6 15.5991V17.5991C9.6 17.9291 9.33 18.1991 9 18.1991H5.4C5.07 18.1991 4.8 17.9291 4.8 17.5991V15.5991C4.8 15.2691 5.07 14.9991 5.4 14.9991H9C9.33 14.9991 9.6 15.2691 9.6 15.5991ZM19.2 15.5991V17.5991C19.2 17.9291 18.93 18.1991 18.6 18.1991H11.8C11.47 18.1991 11.2 17.9291 11.2 17.5991V15.5991C11.2 15.2691 11.47 14.9991 11.8 14.9991H18.6C18.93 14.9991 19.2 15.2691 19.2 15.5991Z" fill="currentColor"/>
                                </svg>
                                <p className="font-bold text-primary">SELESAI</p>
                            </div>
                        </div>
                        <div className="p-3 flex flex-col w-full gap-4">
                            <p className="text-lg font-bold">100%</p>
                            <div className="flex items-start justify-center gap-2 flex-col">
                                <div className="w-full flex justify-between">
                                    <p className={`font-bold text-xs`}>Rp 8.000</p>
                                    <p className={`font-bold text-xs`}>Rp 8.000</p>
                                </div>
                                <ProgressBar percentage={100} />
                                <div className="w-full flex justify-between">
                                    <p className={`font-bold text-xs text-longText`}>12 Jan</p>
                                    <p className={`font-bold text-xs text-longText`}>18 Jan</p>
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
export default Saving;
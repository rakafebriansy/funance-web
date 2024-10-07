import IconButton from '../../components/elements/IconButton';
import PrimaryButton from '../../components/elements/PrimaryButton';
import TextInput from '../../components/elements/TextInput';
import facebookImg from '../../assets/images/facebook.png'
import googleImg from '../../assets/images/google.png'
import waveImg from '../../assets/images/wave.png'

const SignUpPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center relative">
            <div className="w-20 absolute left-5 top-5">
                <button className='w-5 h-5'>
                    <svg className="h-full w-full" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_171_1377)">
                    <g clip-path="url(#clip1_171_1377)">
                    <path d="M2 2L14 14M14 2L2 14" stroke="#B1B1B1" stroke-width="3" stroke-linecap="round"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_171_1377">
                    <rect className="h-full w-full" fill="white"/>
                    </clipPath>
                    <clipPath id="clip1_171_1377">
                    <rect className="h-full w-full" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </button>
            </div>
            <div className="w-20 absolute right-5 top-5">
                <PrimaryButton btnType="link" link="/sign-in" small={false} outlined={true}>MASUK</PrimaryButton>
            </div>
            <form className="flex flex-col items-center w-96 gap-4">
                <h1 className='text-2xl font-bold'>Buat Akunmu</h1>
                <ul className='flex flex-col gap-2 w-full'>
                    <li className='w-full'>
                        <TextInput placeholder="Umur" name="umur">
                            <svg className="w-6" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.5" y="1" width="23" height="23" rx="11.5" stroke="#E5E5E5" stroke-width="2"/>
                            <path d="M11.7465 14.2351V14.1136C11.755 13.321 11.8338 12.6903 11.983 12.2216C12.1364 11.7528 12.3537 11.3736 12.635 11.0838C12.9162 10.794 13.255 10.5298 13.6513 10.2912C13.907 10.1293 14.1371 9.94815 14.3417 9.74787C14.5462 9.54758 14.7081 9.31747 14.8275 9.05753C14.9468 8.79758 15.0064 8.50994 15.0064 8.1946C15.0064 7.81534 14.9169 7.48722 14.738 7.21023C14.559 6.93324 14.3203 6.72017 14.0221 6.57102C13.728 6.41761 13.3999 6.34091 13.0377 6.34091C12.7096 6.34091 12.3963 6.40909 12.098 6.54545C11.7998 6.68182 11.5526 6.89489 11.3566 7.18466C11.1605 7.47017 11.0476 7.83878 11.0178 8.29048H9.07461C9.10444 7.52344 9.29833 6.87571 9.65629 6.3473C10.0142 5.81463 10.4873 5.41193 11.0753 5.1392C11.6676 4.86648 12.3218 4.73011 13.0377 4.73011C13.8218 4.73011 14.5078 4.87713 15.0959 5.17116C15.684 5.46094 16.14 5.8679 16.4638 6.39205C16.7919 6.91193 16.956 7.51918 16.956 8.21378C16.956 8.69105 16.8814 9.12145 16.7323 9.50497C16.5831 9.88423 16.3701 10.223 16.0931 10.5213C15.8203 10.8196 15.4922 11.0838 15.1087 11.3139C14.7465 11.5398 14.4525 11.7741 14.2266 12.017C14.005 12.2599 13.8431 12.5476 13.7408 12.88C13.6385 13.2124 13.5831 13.6236 13.5746 14.1136V14.2351H11.7465ZM12.7117 18.1214C12.3623 18.1214 12.0618 17.9979 11.8104 17.7507C11.559 17.4993 11.4333 17.1967 11.4333 16.843C11.4333 16.4936 11.559 16.1953 11.8104 15.9482C12.0618 15.6967 12.3623 15.571 12.7117 15.571C13.0569 15.571 13.3551 15.6967 13.6066 15.9482C13.8623 16.1953 13.9901 16.4936 13.9901 16.843C13.9901 17.0774 13.9304 17.2926 13.8111 17.4886C13.6961 17.6804 13.5426 17.8338 13.3509 17.9489C13.1591 18.0639 12.9461 18.1214 12.7117 18.1214Z" fill="#AFAFAF"/>
                            </svg>
                        </TextInput>
                    </li>
                    <li className='w-full'>
                        <TextInput placeholder="Nama Pengguna" name="nama-pengguna" />
                    </li>
                    <li className='w-full'>
                        <TextInput placeholder="Kota" name="kota">
                            <svg className="w-4" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2812 9.78121C9.71173 10.3507 8.78831 10.3507 8.21883 9.78121L0.927132 2.48954C0.357623 1.92002 0.357623 0.996656 0.927132 0.427132C1.49666 -0.142377 2.42002 -0.142377 2.98954 0.427132L9.25002 6.68764L15.5105 0.427132C16.08 -0.142377 17.0034 -0.142377 17.5729 0.427132C18.1424 0.996656 18.1424 1.92002 17.5729 2.48954L10.2812 9.78121Z" fill="#E5E5E5"/>
                            </svg>
                        </TextInput>
                    </li>
                    <li className='w-full'>
                        <TextInput placeholder="Nomor Telepon" name="nomor-telepon" />
                    </li>
                    <li className='w-full'>
                        <TextInput placeholder="Kata Sandi" name="kata-sandi" />
                    </li>
                </ul>
                <div className="w-full z-10">
                    <PrimaryButton btnType="link" link='/intro-question/1' small={false}>BUAT AKUN</PrimaryButton>
                </div>
                <div className="flex w-full h-4 items-center justify-center gap-2">
                    <div className="flex flex-grow h-full">
                        <div className="w-full h-full grid grid-rows-2">
                            <div className="w-full border-b"></div>
                            <div className="w-full border-t"></div>
                        </div>
                    </div>
                    <p className='text-lightText text-xs'>atau</p>
                    <div className=" flex-grow h-full">
                        <div className="w-full h-full grid grid-rows-2">
                            <div className="w-full border-b"></div>
                            <div className="w-full border-t"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full justify-between flex gap-5 text-xs">
                    <IconButton image={facebookImg} btnType="link" textColor="text-purple-800 font-bold">FACEBOOK</IconButton>
                    <IconButton image={googleImg} btnType="link" textColor="text-blue-500 font-bold">GOOGLE</IconButton>
                </div>
            </form>
            <div className="fixed w-full bottom-0">
                <img src={waveImg} alt="wave" className='w-full' />
            </div>
        </div>
    );
}

export default SignUpPage;
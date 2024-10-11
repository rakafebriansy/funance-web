import IconButton from '../../components/elements/button/IconButton';
import PrimaryButton from '../../components/elements/button/PrimaryButton';
import TextInput from '../../components/elements/input/TextInput';
import facebookImg from '../../assets/images/facebook.png'
import googleImg from '../../assets/images/google.png'
import waveImg from '../../assets/images/wave.png'

const SignInPage = () => {
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
                <PrimaryButton btnType="link" link="/sign-up" small={false} outlined={true}>DAFTAR</PrimaryButton>
            </div>
            <form className="flex flex-col items-center w-96 gap-4">
                <h1 className='text-2xl font-bold'>Masuk</h1>
                <ul className='flex flex-col gap-2 w-full'>
                    <li className='w-full'>
                        <TextInput placeholder="Nomor Telepon" name="nomor-telepon" />
                    </li>
                    <li className='w-full'>
                        <TextInput placeholder="Kata Sandi" name="kata-sandi">
                            <p className='text-lightText text-sm font-semibold'>LUPA?</p>
                        </TextInput>
                    </li>
                </ul>
                <div className="w-full z-10">
                    <PrimaryButton btnType="link" small={false}>MASUK</PrimaryButton>
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

export default SignInPage;
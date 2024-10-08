import logoImg from '../../assets/images/logo.png';
import PrimaryButton from '../elements/PrimaryButton';

const Navbar = () => {
    return (
        <nav className="fixed w-[80%] top-12 left-1/2 -translate-x-1/2 text-sm rounded-full bg-white py-5 px-6 flex justify-between items-center z-50">
            <img src={logoImg} alt="Funance Logo" className='h-5' />
            <ul className='flex gap-12 text-longText items-center font-bold'>
                <li>
                    BERANDA
                </li>
                <li>
                    TENTANG KAMI
                </li>
                <li>
                    FITUR
                </li>
                <li className='w-16'>
                    <PrimaryButton btnType="link" link="/sign-up" small={true}>MASUK</PrimaryButton>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
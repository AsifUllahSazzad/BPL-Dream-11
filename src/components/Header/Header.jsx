import Logo from './../../assets/logo.png'
import Coin from './../../assets/dollar.png'

const Header = ({coin}) => {
    return (
        <div className='flex justify-between items-center'>
            {/* Logo */}
            <img className='size-18' src={Logo} alt="Logo" />
            <nav className='flex gap-x-12 items-center text-gray-500 text-base'>
                <p><a href="#">Home</a></p>
                <p><a href="#">Fixture</a></p>
                <p><a href="#">Teams</a></p>
                <p><a href="#">Schedules</a></p>
                <div className='text-black font-semibold flex items-center gap-x-2.5 py-3 px-4 border-2 border-[#13131310] rounded-xl'>{coin} Coin <img className='size-5' src={Coin} alt="Coin" /></div>
            </nav>
        </div>
    );
};

export default Header;
import Logo from './../../assets/logo.png'
import Coin from './../../assets/dollar.png'
import { useEffect, useState } from 'react';

const Header = ({coin}) => {

    // Scrolling
        const [isScrolled, setIsScrolled] = useState(false);

        useEffect(() => {
            // runs when component mounts
            const handleScroll = () => {
                setIsScrolled(window.scrollY>50);
            };

            window.addEventListener('scroll', handleScroll);

            // runs when component unmounts
            return () => window.removeEventListener('scroll', handleScroll);
        },[])

    return (
        <div className={`w-full transition-all duration-300 ${isScrolled ? "fixed left-0 top-0 bg-white/10 backdrop-blur-xl shadow-2xl z-50 py-5 px-5 rounded-bl-xl rounded-br-xl" : 'relative'}`}>

            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <a href=""><img className='size-18' src={Logo} alt="Logo" /></a>
                    <nav className={`flex gap-x-12 items-center text-base ${isScrolled ? "text-black" : 'text-gray-500'}`}>
                        <p><a href="#">Home</a></p>
                        <p><a href="#">Fixture</a></p>
                        <p><a href="#">Teams</a></p>
                        <p><a href="#">Schedules</a></p>
                        <div className='text-black font-semibold flex items-center gap-x-2.5 py-3 px-4 border-2 border-[#13131310] rounded-xl'>{coin} Coin <img className='size-5' src={Coin} alt="Coin" /></div>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Header;
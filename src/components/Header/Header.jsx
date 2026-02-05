import Logo from '../../../public/assets/logo.png'
import Coin from '../../../public/assets/dollar.png'
import { useEffect, useState } from 'react'
import MenuIcon from '../../../public/assets/menu.png'
import CloseIcon from '../../../public/assets/close.png'

const Header = ({ coin }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`w-full transition-all duration-300 z-50 ${
        isScrolled
          ? 'fixed left-0 top-0 bg-white/30 backdrop-blur-xl shadow-xl py-3'
          : 'relative py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            <img className="max-md:h-10 w-auto" src={Logo} alt="Logo" />
          </a>

          {/* Desktop Menu */}
          <nav
            className={`hidden md:flex gap-x-10 items-center text-base font-medium ${
              isScrolled ? 'text-black' : 'text-gray-600'
            }`}
          >
            <a href="#">Home</a>
            <a href="#">Fixture</a>
            <a href="#">Teams</a>
            <a href="#">Schedules</a>

            <div className="text-black font-semibold flex items-center gap-2 py-2 px-3 border border-gray-200 rounded-xl">
              {coin} Coin
              <img className="h-4 w-4" src={Coin} alt="Coin" />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-gray-200"
          >
            <img
              src={isOpen ? CloseIcon : MenuIcon}
              alt="menu"
              className="h-5 w-5"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 rounded-2xl shadow-lg bg-white p-5 space-y-4">
            <a className="block font-medium" href="#">
              Home
            </a>
            <a className="block font-medium" href="#">
              Fixture
            </a>
            <a className="block font-medium" href="#">
              Teams
            </a>
            <a className="block font-medium" href="#">
              Schedules
            </a>

            <div className="flex items-center justify-between border-t pt-3">
              <span className="font-semibold">{coin} Coin</span>
              <img className="h-5 w-5" src={Coin} alt="Coin" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header

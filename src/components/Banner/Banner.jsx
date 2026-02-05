import './Banner.css'
import BannerImage from '../../../public/assets/banner-main.png'

const Banner = ({handleFreeCreditBtn}) => {
    return (
        <div className='hero-container mt-6 rounded-xl flex flex-col justify-center items-center'>

            <img className='size-fit mb-6 max-md:size-35' src={BannerImage} alt="Banner-Image" />

            <h1 className='font-bold text-[2.5rem] text-[#FFFFFF] mb-4 max-md:text-[1.5rem] max-md:text-center max-md:mx-2'>Assemble Your Ultimate Dream 11 Cricket Team</h1>

            <h3 className='newFont text-[#ffffff70] text-2xl font-medium max-md:text-xl'>Beyond Boundaries Beyond Limits</h3>

            <button onClick={handleFreeCreditBtn} className='max-md:mb-6 cursor-pointer border border-[#E7FE29] p-2 rounded-2xl mt-6 hover:border-amber-900'>
                <div className='bg-[#E7FE29] font-bold text-base px-5 py-3.5 rounded-xl hover:text-amber-900 max-md:px-2 max-md:py-2'>Claim Free Credit</div>
            </button>

        </div>
    );
};

export default Banner;
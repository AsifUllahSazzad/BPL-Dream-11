import "./Footer.css"
import FooterLogo from './../../assets/logo-footer.png'
import Subscribe from "../Subscribe/Subscribe";

const Footer = () => {
    return (
        <div className="mt-95 relative">
            
            {/* Subscribe Content */}
            <div className="relative">
                <div className="max-w-7xl absolute w-full -top-50 left-1/2 -translate-x-1/2">
                    <Subscribe></Subscribe>
                </div>
            </div>

            {/* Footer Content */}
            <div className="h-195 bg-[#060919] pt-55">

                <div className='max-w-7xl mx-auto text-white space-y-10'>
                        {/* Image Content */}
                    <div className='size-fit mx-auto'>
                            <img className='size-fit' src={FooterLogo} alt="Footer Logo" />
                    </div>

                    {/* Text Content */}
                    <div className="flex items-start justify-between">
                        
                        <div className='w-72 space-y-4'>
                            <h5 className='font-semibold text-lg'>About Us</h5>
                            <p className='text-[#9B9DA3] text-base'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>

                        <div className='space-y-4'>
                            <h5 className='font-semibold text-lg'>
                                Quick Links
                            </h5>
                            <ul className='text-[#9B9DA3] list-disc text-base space-y-2 list-inside'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className='space-y-5'>
                            
                            <div className='space-y-4 w-70'>
                                <h5 className='font-semibold text-lg'>Subscribe</h5>
                            <p className='text-[#9B9DA3] text-base'>Subscribe to our newsletter for the latest updates.</p>
                            </div>

                            <input type="email" placeholder='Enter your email' className='text-black px-7.5 py-3.5 rounded-l-xl bg-white placeholder:text-[#686565]'/>
                            <button className='btnStyle px-7.5 py-3.5 rounded-r-xl shadow-[inset_0px_10px_10px_rgba(0,0,0,0.1),inset_-10px_0px_10px_rgba(0,0,0,0.1),inset_0px_-10px_10px_rgba(0,0,0,0.1),inset_10px_0px_10px_rgba(0,0,0,0.1)] text-black font-bold'>Subscribe</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;
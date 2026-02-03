import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='rounded-3xl border-2 border-white p-6 bg-[#ffffff15]'>

            <div className='newsletter rounded-3xl flex flex-col justify-center items-center gap-y-4 border border-[#d6dddd]'>
                <h3 className='font-bold text-3xl'>Subscribe to our Newsletter</h3>
                <p className='newFont text-xl text-[#13131370] font-medium'>Get the latest updates and news right in your inbox!</p>

                <div className='flex gap-x-4'>
                    <input className='text-base px-7.5 py-4.5 rounded-xl inset-shadow-2xs border border-[#E5E5E5] w-100' type="email" placeholder='Enter your email'/>
                    <button className='btnStyle text-base font-bold px-7.5 rounded-xl shadow-[inset_0px_10px_10px_rgba(0,0,0,0.1),inset_-10px_0px_10px_rgba(0,0,0,0.1),inset_0px_-10px_10px_rgba(0,0,0,0.1),inset_10px_0px_10px_rgba(0,0,0,0.1)]'>Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;
import UserIcon from '../../assets/user.png'
import FlagIcon from '../../assets/flag.png'


const Player = ({player, handleTheChoosePlayer}) => {
    const {image, name, country, role, battingType, bowlingType, biddingPrice} = player;


    return (
        <div className='border border-[#E7E7E7] rounded-2xl p-6'>
                    
                    <div className='flex flex-col justify-center gap-y-4'>
        
                        <div className="w-full aspect-square overflow-hidden rounded-2xl">
                        <img
                            className="w-full h-full object-cover object-top"
                            src={image}
                            alt="Player Image"
                        />
                        </div>
        
                    <div className='flex items-center gap-x-4'>
                         <img className='size-8' src={UserIcon} alt="User" />
                         <h3 className='font-semibold text-xl'>{name}</h3>
                    </div>
        
                    <div className='flex justify-between items-center'>
        
                        <div className='flex gap-x-3.5 items-center'>
                            <img className='size-5' src={FlagIcon} alt="Flag" />
                            <p className='text-base text-[#898989]'>{country}</p>
                        </div>
                        
                        <p className='bg-[#F3F3F3] px-4 py-2 inline-block rounded-lg'>{role}</p>
                    </div>
        
                    </div>
        
                    <hr className='text-[#EDEDED] my-4' />
                    
                    {/* Half One */}
        
                    <div className='flex flex-col justify-center gap-y-3'>
        
                        <h3 className='text-base font-bold'>Rating</h3>
        
                        <div className='flex items-center justify-between'>
                            <h3 className='text-base font-semibold'>{battingType}</h3>
                            <h3 className='text-base text-[#5A5A5A]'>{bowlingType}</h3>
                        </div>
        
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold text-base'>Price: ${biddingPrice}</h3>
        
                            <button
                            onClick={()=> handleTheChoosePlayer(player)}
                            className='px-4 py-2 rounded-lg border border-[#E7E7E7] cursor-pointer hover:bg-[#E7FE29]'>Choose Player</button>
                        </div>
                    </div>
                </div>
    );
};

export default Player;
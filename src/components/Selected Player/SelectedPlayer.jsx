import Delete from './../../assets/delete.png'


const SelectedPlayer = ({selectedPlayer}) => {

    const {playerId, image, name, battingType, biddingPrice} = selectedPlayer;

    return (
        <div className="flex border p-6 gap-x-6 border-[#13131330] rounded-2xl items-center">
                    <img className="size-20 rounded-2xl" src={image} alt="Profile Picture" />
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">{name}</h1>
                        <p className="text-base text-[#807b7b]">{battingType}</p>
                    </div>
                    <img 
                    
                    className='size-8 ml-auto cursor-pointer' src={Delete} alt="Remove Player" />
                </div>
    );
};

export default SelectedPlayer;
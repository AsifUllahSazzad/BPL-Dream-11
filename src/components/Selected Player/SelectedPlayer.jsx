import Delete from './../../assets/delete.png'
import Remove from './../../assets/Hover-Remove.png'


const SelectedPlayer = ({selectedPlayer, selectedPlayers, setSelectedPlayers, setCoin}) => {

    const {playerId, image, name, battingType, biddingPrice} = selectedPlayer;

    const removePlayer = () =>{
        // Remove player
        const remainingPlayers = selectedPlayers.filter((p) => p.playerId !== playerId);
        setSelectedPlayers(remainingPlayers);

        // Remove player bidding price add also
        setCoin(prevMoney => prevMoney + biddingPrice);
    }

    return (
        <div className="flex border p-6 gap-x-6 border-[#13131330] rounded-2xl items-center">
                    <img className="size-20 rounded-2xl" src={image} alt="Profile Picture" />
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">{name}</h1>
                        <p className="text-base text-[#807b7b]">{battingType}</p>
                    </div>


                    <div className="group ml-auto cursor-pointer" onClick={removePlayer}>

                        <img
                            className="size-8 group-hover:hidden"
                            src={Delete}
                            alt="Remove Player"
                        />
                        <img
                            className="size-8 hidden group-hover:block"
                            src={Remove}
                            alt="Remove Player"
                        />
                    </div>
                </div>
    );
};

export default SelectedPlayer;
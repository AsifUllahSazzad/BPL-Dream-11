import { useEffect, useState } from "react";
import Player from "../Player/Player";
import SelectedPlayer from "../Selected Player/SelectedPlayer";
import { toast } from 'react-toastify';

const Players = ({coin, setCoin}) => {


    // Players data store state
    const [players, setPlayers] = useState([]);

    useEffect(() => {
            fetch('./players.json')
            .then((res) => res.json())
            .then((data) => setPlayers(data))
    }, [])


    // Selected button check:
    const [activeBtn, setActiveBtn] = useState('available');



    // Handle the choose player button - selected players
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleTheChoosePlayer = (player) =>{

        // Bidding price check
        let afterBiddingPrice = coin - player.biddingPrice;
        
        // Player already exist
        const playerExistCheck = selectedPlayers.some((p) => p.playerId === player.playerId);
        
        if(afterBiddingPrice<0){
            toast.error("Not enough money to buy this player. Claim some Credit");
        }
        else{
            if(playerExistCheck){
                toast.error("Player already selected");
            }
            else{
                // Selected players length <= 6
                if(selectedPlayers.length < 6){
                    setSelectedPlayers(prevPlayer => [...prevPlayer, player]);
                    setCoin(afterBiddingPrice);
                    toast.success(`Congrates !! ${player.name} is now in your squad`);
                }
                else{
                    toast.error("Player limit reached");
                }
            }
        }

    }



    return (
        <div>
            {/* Button */}
            <div className="mt-12 md:mt-20 px-4 md:px-0">

  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    {/* Title */}
    <h3 className="text-lg md:text-[1.75rem] font-bold text-center md:text-left">
      {activeBtn === "available"
        ? "Available Players"
        : `Selected Player (${selectedPlayers.length}/6)`}
    </h3>

    {/* Buttons */}
    <div className="flex w-full md:w-auto border border-[#13131310] rounded-2xl text-sm md:text-base text-[#13131390] overflow-hidden">

      <button
        onClick={() => setActiveBtn("available")}
        className={`flex-1 px-4 py-2 md:px-5 md:py-3 transition hover:text-black
        ${activeBtn === "available" ? "bg-[#E7FE29] font-bold text-black" : ""}`}
      >
        Available
      </button>

      <button
        onClick={() => setActiveBtn("selected")}
        className={`flex-1 px-4 py-2 md:px-5 md:py-3 transition hover:text-black
        ${activeBtn === "selected" ? "bg-[#E7FE29] font-bold text-black" : ""}`}
      >
        Selected ({selectedPlayers.length})
      </button>

    </div>
  </div>
</div>



        {/* Available Button Data Load */}
        {
            activeBtn === 'available' && (
                <div className="grid grid-cols-3 md:gap-5 max-md:grid-cols-1 max-md:mx-5">
                    {
                        players.map((player) => <Player
                        key={player.playerId}
                        player={player}
                        handleTheChoosePlayer={handleTheChoosePlayer}
                        ></Player>)
                    }
                </div>
            )
        }

        {/* Selected Player Button Data Load*/}
        {
            activeBtn === 'selected' && (
                <div className="space-y-10">
                    {
                        selectedPlayers.map((selectedP) => <SelectedPlayer
                        key={selectedP.playerId}
                        selectedPlayer={selectedP}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                        setCoin={setCoin}
                        ></SelectedPlayer>)

                    }
                         <div className="px-4 md:px-0 flex justify-center md:justify-start mt-5">

                            <div className="rounded-2xl p-2 border inline-block hover:border-orange-700 hover:text-orange-700 w-full md:w-auto">

                                <button
                                onClick={() => setActiveBtn("available")}
                                className="bg-[#E7FE29] w-full md:w-auto px-4 py-2 md:px-6 md:py-4 rounded-2xl font-bold cursor-pointer text-sm md:text-base"
                                >
                                Add More Player
                                </button>

                            </div>
                        </div>

                </div>
            )
        }


        </div>
    );
};

export default Players;
import { useEffect, useState } from "react";
import Player from "../Player/Player";
import SelectedPlayer from "../Selected Player/SelectedPlayer";

const Players = () => {


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
        setSelectedPlayers(prevPlayer => [...prevPlayer, player]);
    }



    return (
        <div>
            {/* Button */}
            <div className="flex items-center justify-between mt-20">
                <h3 className="text-[1.75rem] font-bold">{activeBtn === 'available' ? "Available Players" : `Selected Player (${selectedPlayers.length}/6)`}</h3>
                <div className="text-base inline-block border border-[#13131310] rounded-2xl mb-9 text-[#13131390]">

                    <button
                        onClick={() => setActiveBtn('available')}
                        className={`cursor-pointer px-5 py-4 transition hover:text-black ${activeBtn==='available' && ("bg-[#E7FE29] font-bold text-black rounded-tl-2xl rounded-bl-2xl")}`}>Available</button>

                    <button
                    onClick={() => setActiveBtn('selected')}
                    className={`cursor-pointer px-5 py-4 transition hover:text-black ${activeBtn==='selected' && ("bg-[#E7FE29] font-bold text-black rounded-tr-2xl rounded-br-2xl")}`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>


        {/* Available Button Data Load */}
        {
            activeBtn === 'available' && (
                <div className="grid grid-cols-3 gap-10">
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
                        ></SelectedPlayer>)
                    }
                </div>
            )
        }


        </div>
    );
};

export default Players;
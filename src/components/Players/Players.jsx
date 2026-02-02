import { useEffect, useState } from "react";

const Players = () => {


    // Players data store
    const [players, setPlayers] = useState([]);

    useEffect(() => {
            fetch('./players.json')
            .then((res) => res.json())
            .then((data) => setPlayers(data))
    }, [])


    // Selected button check:
    const [activeBtn, setActiveBtn] = useState('available');



    return (
        <div>
            {/* Button */}
            <div className="flex items-center justify-between mt-20">
                <h3 className="text-[1.75rem] font-bold"></h3>
                <div className="text-base inline-block border border-[#13131310] rounded-2xl mb-9 text-[#13131390]">

                    <button
                        onClick={() => setActiveBtn('available')}
                        className={`cursor-pointer px-5 py-4 transition hover:text-black ${activeBtn==='available' && ("bg-[#E7FE29] font-bold text-black rounded-tl-2xl rounded-bl-2xl")}`}>Available</button>

                    <button
                    onClick={() => setActiveBtn('selected')}
                    className={`cursor-pointer px-5 py-4 transition hover:text-black ${activeBtn==='selected' && ("bg-[#E7FE29] font-bold text-black rounded-tr-2xl rounded-br-2xl")}`}>Selected {}</button>
                </div>
            </div>


        </div>
    );
};

export default Players;
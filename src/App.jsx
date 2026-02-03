import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import { toast } from 'react-toastify';
import Players from "./components/Players/Players";

function App() {

  // Free Credit
  const [coin, setCoin] = useState(0);
  const handleFreeCreditBtn = () =>{
      const newCoin = 500000;
      setCoin(prevCoin => prevCoin + newCoin);

      toast.success("Credit Added to your Account");
  }

  return (
    <>
     <div className='max-w-7xl mx-auto mt-12'>
          <Header
          coin={coin}
          ></Header>
          <Banner
          handleFreeCreditBtn={handleFreeCreditBtn}
          ></Banner>

          <Players
          coin={coin}
          setCoin={setCoin}
          ></Players>
      </div>
    </>
  )
}

export default App

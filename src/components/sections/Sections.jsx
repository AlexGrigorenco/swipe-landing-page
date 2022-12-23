import Features from "./features/Features";
import Numbers from "./numbers/Numbers";
import Technologies from "./Technologies";
import WatchVideo from "./WatchVideo";
import './style.css'
import ReuseSections from "./ReuseSections";
import Price from "./price/Price";





const Sections = () => {

  


  return ( 

    <main className="">
      <div className="container">

    <Numbers />
    <Features />

    <WatchVideo />
    <Technologies />
    <ReuseSections />

    <Price />

    </div>

    </main>
   );
}
 
export default Sections;
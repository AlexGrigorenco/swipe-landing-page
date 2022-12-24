import Features from "./features/Features";
import Numbers from "./numbers/Numbers";
import Technologies from "./Technologies";
import WatchVideo from "./WatchVideo";
import './style.css'
import ReuseSections from "./ReuseSections";
import Price from "./price/Price";
import Team from "./team/Team";





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
    <Team />

    </div>

    </main>
   );
}
 
export default Sections;
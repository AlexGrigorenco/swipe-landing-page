

import Title from "../Title";
import './style.css'
import redBalls from './../../../images/red-balls-img.png'
import Spoilers from "./Spoilers";


const Faq = () => {
  return ( 


    <section className="faq py-[16vh] ">
    <div className="relative flex">
      <Title text='Frequently asked questions' maxWidth='630px' anchor='faq'/>
      
      <div className="absolute decor top-[-4%] right-[-20%] z-[-1]">
        <img src={redBalls} alt="decor" />
      </div>    
    </div>

    <Spoilers />
    </section>
   );
}
 
export default Faq;
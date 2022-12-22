import HorizontalLine from "../HorizontalLine";
import Title from "../Title";
import Cards from "./Cards";
import bgImg from './../../../images/decor-numbers.png'
import './style.css'



const Numbers = () => {
  return ( 
   <section className="numbers relative pb-[24px]">
    <div className="numbers-content pt-[6vh] flex gap-[16%] relative z-10">

       <div className="shrink-0 ">
         
          <p style={{fontFamily: 'Poppins'}} className='text-[17px] uppercase pb-[10px] pl-[4px]'>since 2019</p>

          <Title anchor='about' text='In numbers' />
         
       </div>

       <div className="relative pt-[80px] flex-grow">
         <Cards />
       </div>

    </div>

      <HorizontalLine position='left-0 bottom-0' />

         <div className=" bgImg absolute top-[-18%] left-[-20%] z-0">
            <img src={bgImg} alt="decor" />
         </div>
    </section>

    

   );
}
 
export default Numbers;
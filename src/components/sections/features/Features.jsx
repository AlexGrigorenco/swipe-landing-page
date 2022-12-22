import Button from "../../Button";
import Title from "../Title";
import Cards from "./Cards";
import './style.css'



const Features = () => {
  return ( 

    <section className="features py-[140px]">

      <div className="title flex gap-[20px] justify-between pb-[168px]">
        <Title text='Get to know our main features'
        maxWidth='580px' anchor='features' />
        <div className="pt-[8px] flex-shrink-0"><Button bgColor='blue' text='Buy now' /></div>
      </div>

      <div style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid #FBFBFF',
                    boxShadow: '0px 4px 20px rgba(193, 193, 193, 0.3)',
                    borderRadius: '10px',
                    padding: '40px 50px 60px 50px'}} className=''>
        <Cards />
      </div>
    </section>

   );
}
 
export default Features;
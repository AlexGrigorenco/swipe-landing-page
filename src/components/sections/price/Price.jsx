import HorizontalLine from "../HorizontalLine";
import Title from "../Title";
import Cards from "./Cards";
import './style.css'


const Price = () => {
  return ( 


    <section className="price">
      <div className="flex items-center gap-[16vh]">
        <Title text='Price plans' anchor='pricing' />
        <div className="relative">
          <HorizontalLine position='top-0 left-0'/>
        </div>
      </div>
      <Cards />
    </section>
   );
}
 
export default Price;
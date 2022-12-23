import Button from "../../Button";
import List from "./List";
import puck from './../../../images/puck-decor.png'
import tor from './../../../images/price-tor-decor.png'



const Cards = () => {

  const styles = {
    background: 'rgba(255, 255, 255, 0.6)',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0px 4px 20px rgba(193, 193, 193, 0.3)',
    borderRadius: '10px',
  }
  return ( 


    <div className="cards-wrapper pt-[6vh] flex gap-4">

      

      <div style={styles} className="basic relative flex flex-col gap-[46px] p-[52px]">
        <div className="absolute top-[-38%] left-[-18%] z-[-1] decor">
            <img src={puck} alt="decor" />
        </div>
        <h5 className="text-[44px] leading-[50px]">Basic</h5>
        <List />
        <div className="flex card-price gap-1 justify-between">
          <p style={{fontSize: 'calc(36px + (70 - 36) * ((100vw - 320px) / (1800 - 320)))'}} className=" leading-[110%]">$29<span className="text-[18px] leading-[25px] text-[#ABAABB] relative top-2">/ month</span></p> 
          <div className="flex justify-end">
          <div><Button text='Buy now' bgColor='blue' /></div>
          </div>
        </div>
      </div>

      <div style={styles} className="pro relative flex flex-col gap-[46px] p-[52px]">

      <div className="absolute top-[28%] right-[-10%] z-[-1]">
            <img src={tor} alt="decor" />
        </div>

        <div className="absolute top-3 right-3">
          <Button text='Best value' bgColor='white' padding='3px 25px' />
        </div>
        <h5 className="text-[44px] leading-[50px]">Pro</h5>
        <List />
        <div className="flex card-price gap-1 justify-between">
          <p style={{fontSize: 'calc(36px + (70 - 36) * ((100vw - 320px) / (1800 - 320)))'}} className=" leading-[110%]">$39<span className="text-[18px] leading-[25px] text-[#ABAABB] relative top-2">/ month</span></p> 
          <div className="flex justify-end">
          <div><Button text='Buy now' bgColor='blue' /></div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Cards;
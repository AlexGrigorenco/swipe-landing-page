import Button from "../../Button";
import Title from "../Title";
import TeamSlider from "./TeamSlider";
import arrowBttn from './../../../images/team/arrow.svg'



const Team = () => {
  return ( 


    <div className="team pt-[20vh]">
      <div className="flex justify-between gap-[8vh] flex-wrap items-center">
        <div>
            <Title text='Meet the team' maxWidth='580px' anchor='team'/>
            <Title text='Want to join?' maxWidth='580px'/>
        </div>
        
        <div className="flex gap-[30px] flex-wrap">
          <div>
            <Button text='Join us' bgColor='blue' />
          </div>

              <div>
              <Button text='See all openings' bgColor='white' />
              </div>
        </div>
      </div>

      <div className="pt-[14vh]">
          <div className="team-slider px-[8vw] relative">

             <TeamSlider />
             

             <button className="absolute hover:scale-110 hover:border px-[15px] py-[10px] shadow-[0px_4px_20px_rgba(193,_193,_193,_0.3)] bg-[#FBFBFF] rounded-[5px] sliders__bttn sliders__bttn--prev top-[42%] left-0">
              <img src={arrowBttn} alt="prev" />
             </button>
             <button className="absolute hover:scale-110 hover:border px-[15px] py-[10px] shadow-[0px_4px_20px_rgba(193,_193,_193,_0.3)] bg-[#FBFBFF] rounded-[5px] sliders__bttn sliders__bttn--next top-[42%] right-0">
             <img className="rotate-180" src={arrowBttn} alt="next" />
             </button>
        </div>
      </div>
    </div>
   );
}
 
export default Team;
import Button from "../../Button";
import Title from "../Title";
import TeamSlider from "./TeamSlider";
import './style.css'



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
          <div className="sliders-wrapper px-[8vw] relative">

             <TeamSlider navigation={{
        nextEl: '.sliders__bttn--next',
        prevEl: '.sliders__bttn--prev'
      }}
                         controller={2}/>
             <TeamSlider navigation={{
        nextEl: '.sliders__bttn--next',
        prevEl: '.sliders__bttn--prev'
      }} initialSlide={4} controller={1}/>

             <button className="absolute p-[20px] bg-blue-600 rounded sliders__bttn sliders__bttn--prev top-[46%] left-0"></button>
             <button className="absolute p-[20px] bg-blue-600 rounded sliders__bttn sliders__bttn--next top-[46%] right-0"></button>
        </div>
      </div>
    </div>
   );
}
 
export default Team;
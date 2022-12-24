import Button from "../../Button";
import Title from "../Title";



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
    </div>
   );
}
 
export default Team;
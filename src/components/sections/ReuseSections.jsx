

import SquareLink from "../SquareLink";
import HorizontalLine from "./HorizontalLine";
import Title from "./Title";
import decor from './../../images/reuse-section-img.png'


const ReuseSections = () => {
  return ( 


    <section className="relative reuse-sections flex  gap-[7vw] pt-[16vh] pb-[10vh]">
      
      <div className="relative flex flex-col gap-[52px] pt-[20vh]">
        <HorizontalLine position='top-[4vh] right-0' />
        <h5 style={{fontFamily: 'Poppins'}} className="text-[35px] leading-[110%]">Easy to change</h5>
        <div className="flex flex-col gap-[20px] max-w-[700px]">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis. Vestibulum sed massa bibendum, porta ex consectetur, commodo tellus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis.</p>
        </div>
        <div>
        <SquareLink text='learn more' />
        </div>
      </div>

      <div className="relative z-[-1]">
        <Title text='Reuse the sections' maxWidth='460px' size='44' />
        <div className="decor absolute top-[26%] right-0">
            <img src={decor} alt="decor" />
        </div>
      </div>
    </section>
   );
}
 
export default ReuseSections;
import SquareLink from "../SquareLink";
import HorizontalLine from "./HorizontalLine";
import Title from "./Title";
import orangeBalls from './../../images/orange-balls-img.png'


const Technologies = () => {
  return ( 


    <section className="relative technologies flex  gap-[7vw] pt-[16vh]">
      <div className="relative">
        <Title text='No need to know any technologies' maxWidth='460px' size='44' />
        <div className="decor absolute top-[56%] left-[-10%]">
            <img src={orangeBalls} alt="decor" />
        </div>
      </div>
      <div className="relative flex flex-col gap-[52px] pt-[20vh]">
        <HorizontalLine position='top-[10vh] left-0' />
        <h5 style={{fontFamily: 'Poppins'}} className="text-[35px] leading-[110%]">Easy to understand</h5>
        <div className="flex flex-col gap-[20px] max-w-[700px]">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis. Vestibulum sed massa bibendum, porta ex consectetur, commodo tellus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis.</p>
        </div>
        <div>
        <SquareLink text='learn more' />
        </div>
      </div>
    </section>
   );
}
 
export default Technologies;
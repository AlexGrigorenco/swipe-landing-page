import { SwiperSlide } from "swiper/react";
import martinFuri from './../../../images/team/martin-furi-img.png'
import timotiCrash from './../../../images/team/timoti-crash-img.png'


const Sliders = () => {

  const slides = [
    {
      id: 1,
      img: martinFuri,
      name:'Martin Fury',
      jobTitle: <div>CEO & <br/> Co-Founder</div>,
    },
    {
      id: 2,
      img: timotiCrash,
      name:'Timoty Crash',
      jobTitle: <div>CTO & <br/> Co-Founder</div>,
    },
  ]
  return ( 
    <>
          {slides.map(item => 
            <SwiperSlide key={item.id}>
              <div className="max-w-[230px] p-[5px] flex flex-col items-center gap-[16px]">
                <div className="rounded-[50%] overflow-hidden">
                  <img src={item.img} alt="icon" />
                </div>

                <p className="text-[20px]">{item.name}</p>

                <p className="text-[18px] text-[#2D2B5C] text-center">
                  {item.jobTitle}
                </p>
                
              </div>

            </SwiperSlide>
          )}
  </>
   );
}
 
export default Sliders;
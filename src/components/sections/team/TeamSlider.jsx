
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from "swiper";

import "swiper/css";
import './style.css'

import martinFuri from './../../../images/team/martin-furi-img.png'
import timotiCrash from './../../../images/team/timoti-crash-img.png'
import mirandaLoudi from './../../../images/team/miranda-loudi-img.png'
import jimPartners from './../../../images/team/jim-partners-img.png'

import joeLi from './../../../images/team/joe-li-img.png'
import alexSosnovsky from './../../../images/team/alex-sosnovsky-img.png'
import andyGupta from './../../../images/team/andy-gupta-img.png'
import danWizeNicon from './../../../images/team/dan-wize-nicon-img.png'

const TeamSlider1 = ({navigation, initialSlide, controller}) => {

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
    {
      id: 3,
      img: mirandaLoudi,
      name:'Miranda Loudy',
      jobTitle: <div>Global HRD</div>,
    },
    {
      id: 4,
      img: jimPartners,
      name:'Jim Partners',
      jobTitle: <div>Chief Product Officer</div>,
    },

    {
      id: 5,
      img: joeLi,
      name:'Joe Lee',
      jobTitle: <div>Lead Product Designer</div>,
    },
    {
      id: 6,
      img: alexSosnovsky,
      name:'Alex Sosnovskyi',
      jobTitle: <div>Technical Lead & Senior <br/> Software Engineer</div>,
    },
    {
      id: 7,
      img: andyGupta,
      name:'Andy Gupta',
      jobTitle: <div>CMO & <br/> Marketing Operations</div>,
    },
    {
      id: 8,
      img: danWizeNicon,
      name:'Dan Wize-Nicon',
      jobTitle: <div>UI/UX Designer</div>,
    },
  ]

  return (  

    
    <Swiper className='team-slider mySwiper1 mb-3'

      
      navigation={navigation}
      modules={[Navigation, Controller]}  
      spaceBetween={20}
      slidesPerView={4}
      loop={true}
      initialSlide={initialSlide ? initialSlide : 0}
      controller={{ control: controller }}
      
      
    >

          {slides.map(item => 
            <SwiperSlide key={item.id}>
              <div className="max-w-[230px] p-[5px] flex flex-col items-center gap-[16px]">
                <div className="rounded-[50%] overflow-hidden">
                  <img src={item.img} alt="icon" />
                </div>

                <p className="text-[20px]">{item.name}</p>

                <div className="text-[18px] text-[#2D2B5C] text-center">
                  {item.jobTitle}
                </div>
                
              </div>

            </SwiperSlide>
          )}


    </Swiper>
    
  );
}
 
export default TeamSlider1;
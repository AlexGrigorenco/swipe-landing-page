

import arrow from './../../../images/features-icons/icon-arrow.svg'
import car from './../../../images/features-icons/icon-car.svg'
import clock from './../../../images/features-icons/icon-clock.svg'
import gearwheel from './../../../images/features-icons/icon-gearwheel.svg'
import lightning from './../../../images/features-icons/icon-lightning.svg'
import man from './../../../images/features-icons/icon-man.svg'
import square from './../../../images/features-icons/icon-square.svg'
import star from './../../../images/features-icons/icon-star.svg'

import cube from './../../../images/decor-cube.png'
import cylinder from './../../../images/decor-cylinder.png'
import tor from './../../../images/decor-tor.png'



const Cards = () => {

  const cards = [
    {
      id: 1,
      decorLine: <div className='decor-line'></div>,
      title: 'Simple',
      text: 'Here you will not find complex technological solutions that will baffle you.',
      list: [
        {
          icon: gearwheel,
          text: 'Save your resources on development',
        },
        {
          icon: square,
          text: 'Easy to understand',
        },
        {
          icon: man,
          text: 'User friendly',
        },
      ],
    },
    {
      id: 2,
      decorLine: <div className='decor-line'></div>,
      title: 'Customizable',
      text: 'You can reuse blocks and individual elements to create something unique on your website.',
      list: [
        {
          icon: arrow,
          text: 'Reuse the sections and create your own style',
        },
        {
          icon: clock,
          text: 'Save your time',
        },
        {
          icon: gearwheel,
          text: 'Save your resources on development',
        },
        {
          icon: lightning,
          text: 'Unique design',
        },
      ],
    },
    {
      id: 3,
      title: 'Stylish',
      text: 'Right and without unnecessary tinsel, just scroll through this template and you will see.',
      list: [
        {
          icon: lightning,
          text: 'Unique design',
        },
        {
          icon: star,
          text: 'Unforgettable 3D elements and trendy glass-effect',
        },
        {
          icon: car,
          text: 'Design that drives an industry',
        },
      ],
    },
  ]

  return ( 

    <div className='cards relative flex gap-1 justify-between'>
        {cards.map((item, i) => <><div className='card relative flex flex-col gap-[26px] p-[14px] max-w-[348px]'  key={item.id}>
          <h4 className='text-[34px] leading-[110%]'>{item.title}</h4>
          <p>{item.text}</p>

                <div className='flex flex-col gap-[14px]'>
                  {item.list.map(i => <div  key={i.icon}>
                    <div className='flex gap-[22px]'>
                      <div className='w-[21px] h-[21px] flex-shrink-0'>
                        <img style={{objectFit: 'fill'}} src={i.icon} alt="icon" />
                      </div>
                      <span>
                        {i.text}
                      </span>
                    </div>
                  </div>)}
              </div>

        </div>
                  <div className='decor-wrapper'> {item.decorLine}</div> 
        </>
        
        )}

        <div className='cube absolute z-[-1] top-[-8%] left-[-10%]'>
          <img src={cube} alt="decor" />
        </div>

        <div className='cylinder absolute z-[-1] right-[-7.5%] top-[-32%]'>
          <img src={cylinder} alt="decor" />
        </div>

        <div className='tor absolute z-[-1] left-[34%] bottom-[-38%]'>
          <img src={tor} alt="decor" />
        </div>

    </div>
   );
}
 
export default Cards;
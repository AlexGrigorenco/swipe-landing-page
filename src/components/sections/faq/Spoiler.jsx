

import { useState } from 'react';
import img from './../../../images/spoiler-arrow-img.svg'


const Spoiler = ({title, body}) => {

  const [spoileActive, setSpoileActive] = useState(false)

  return ( 


    <div className='' style={{borderBottom: '2px solid #E7E5FF'}}>
      <div className="spoile-title cursor-pointer pl-[2vw] flex items-center gap-[4vw]" onClick={() => setSpoileActive(prev => !prev)}>

            <div style={{transition: '0.2s linear'}} className={spoileActive ? 'arrow-icon w-[68px] h-[46px] flex-shrink-0 rotate-180' : 'arrow-icon w-[68px] h-[68px] flex-shrink-0'}>
               <img  style={{objectFit: 'fill'}} src={img} alt="icon" />
            </div>

          <p className=" leading-[110%] pt-[34px] pb-[48px] max-w-[710px]" style={{fontFamily: 'Poppins', fontSize: `calc(26px + (44 - 26) * ((100vw - 320px) / (1900 - 320)))`}}>{title}</p>

      </div>

      <div>
        {spoileActive && <div className='p-[20px] max-w-[90%] text-[20px] leading-[140%]'>{body}</div>}
      </div>

    </div>
   );
}
 
export default Spoiler;
import { useState } from "react";
import Logo from "../Logo";
import img from './../../images/webflow.png'


const SubHeaderBlock = () => {

  const [hidden, setHidden] = useState(window.outerWidth > 700 ? true : false)

  window.addEventListener('resize', () =>{
    setHidden(window.outerWidth > 700 ? true : false)
  })

  return ( 
    <div className=" bg-[#E7E5FF]">
      <div className="container">
        <div className="subheader flex items-center justify-between pl-[56px] py-[65px] gap-3 flex-wrap">
            {hidden && <><Logo href='#mainLogo' />

            <div>
              <img src={img} alt="img" />
            </div>
            </>
            }

            <Logo href='#mainLogo' />

            <div>
              <img src={img} alt="img" />
            </div>
        </div>

      </div>

    </div>

   );
}
 
export default SubHeaderBlock;
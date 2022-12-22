import { useState } from "react";
import Button from "../Button";
import Logo from "../Logo";
import MenuBurger from "./menu-burger/MenuBurger";
import MenuList from "./MenuList";


const MenuNav = () => {

  const [mobile, setMobile] = useState(window.outerWidth > 950 ? true : false)

  window.addEventListener('resize', () => (window.outerWidth > 950) ? setMobile(true) : setMobile(false))


  return ( 

    <div className="flex items-center flex-wrap gap-[10px] justify-between pt-[40px] relative z-10">

      <Logo id='mainLogo' />

      {mobile && <>
        <MenuList />

        <div>
          <Button bgColor='white' text='Buy now' />
        </div>
        </>
      }

      

     {mobile === false ? <MenuBurger active='true' /> : null}
    
    </div>

   );
}
 
export default MenuNav;
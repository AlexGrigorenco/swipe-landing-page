
import './style.css'
// import { useState } from 'react';
// import MenuMobile from './MenuMobile';


const MenuBurger = ({active}) => {

  // const[mobile, setMobile] = useState(active === 'true' ? true : false)

  const toggleMenu = ()=> {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    // setMobile(prev => !prev)
  }

  return ( 
    <>
    <div onClick={toggleMenu}  className="menu-icon-wrapper">
      <div className="menu-icon"></div>
    </div>
    {/* {mobile && <MenuMobile />} */}
    </>
   );
}
 
export default MenuBurger;
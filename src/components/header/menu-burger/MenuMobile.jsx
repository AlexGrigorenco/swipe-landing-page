import Button from "../../Button";
import Logo from "../../Logo";
import MenuList from "../MenuList";
import MenuBurger from "./MenuBurger";



const MenuMobile = () => {

  return ( 

    <div className="flex flex-col items-center justify-around z-30 fixed top-0 left-0 right w-[100vw] h-[100vh] bg-white">
      <div className="absolute top-4 right-4">
        <MenuBurger />
      </div>
      <Logo id='mainLogo' />
      <MenuList mobile />
      <div>
      <Button bgColor='blue' text='Buy now'/>
      </div>
    </div>

   );
}
 
export default MenuMobile;
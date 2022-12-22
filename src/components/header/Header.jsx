import HeaderContent from "./HeaderContent";
import MenuNav from "./MenuNav";
import mainImg from './../../images/main-header-img.png'
import './style.css'


const Header = () => {
  return (

    <div className="container flex flex-col relative h-[100vh] w-[100%] ">

      <MenuNav />

      <HeaderContent />

      <div className="main-decor-img w-[62%] h-[108%] absolute top-0 right-[-4%]">
        <img style={{objectFit: 'fill', zIndex: '-1'}} src={mainImg} alt='' />
      </div>

    </div>    

    );
}
 
export default Header;
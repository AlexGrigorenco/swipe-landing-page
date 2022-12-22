import Button from "../Button";
import twt from './../../images/header-social-icons/twitter.svg'
import inst from './../../images/header-social-icons/inst.svg'
import fb from './../../images/header-social-icons/fb.svg'
import SquareLink from "../SquareLink";


const HeaderContent = () => {
  const socialLink = [
    {id: 1, img: twt, link: 'https://twitter.com'}, 
    {id: 2, img: inst, link: 'https://www.instagram.com/'}, 
    {id: 3, img: fb, link: 'https://www.facebook.com/'},
  ]
  return ( 
    <div className="relative z-10 flex flex-col justify-center flex-grow">

    <h1 style={{fontSize: 'calc(46px + (80 - 46) * ((100vw - 320px) / (2100 - 320)))', lineHeight: '110%'}} className="  max-w-[770px] mb-[60px]">
    Accessible way to <br /> start your business
    </h1>

    <p style={{fontSize: 'calc(18px + (30 - 11) * ((100vw - 320px) / (1900 - 320)))'}} className=" mb-[52px]">
    Simple. Customizable. Stylish.
    </p>

    <div className="mb-[65px]">
      <Button bgColor='blue' text='Get demo for free' />
    </div>

    <div className="flex justify-between items-end">
    <SquareLink text='watch full video' />

    <div className=" flex flex-col gap-y-[15px]">

      {socialLink.map(item => <div key={item.id} className="w-[25px] h-[25px] hover:scale-110">
        <a target='_blank' rel="noreferrer"  href={item.link}><img src={item.img} alt="icon" /></a>        
      </div>)}
      
    </div>

    </div>
    
    
    </div>


   );
}
 
export default HeaderContent;
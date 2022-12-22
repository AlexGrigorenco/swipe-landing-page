

import logo from './../images/logo.png'

const Logo = ({id, href}) => {
  return ( 

    <div style={{transition: '0.3s linear'}} className="relative z-10 logo-wrapper w-[111px] h-[49px] hover:scale-105">
      <a id={id ? id : null}
       href={href? href : '#/'}><img src={logo} alt="logo" /></a>
        
      </div>

   );
}
 
export default Logo;
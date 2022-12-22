


const Button = ({bgColor, text, padding}) => {

  const style = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '22px',
    borderRadius: '5px',
    transition: '0.3s linear'
    
  }

  if(bgColor === 'blue'){

  style.background = '#6259EA'
  style.padding = '18px 36px'
  style.color = '#fff'

} else{ 

  style.background = 'rgba(255, 255, 255, 0.4)' 
  style.border = '2px solid rgba(255, 255, 255, 0.4)'
  style.boxShadow = '0px 4px 20px rgba(193, 193, 193, 0.3)'
  padding ? style.padding = padding : style.padding = '18px 36px'
}

  return ( 

      <button  className="hover:scale-105" style={style}>{text}</button>

   );
}
 
export default Button;
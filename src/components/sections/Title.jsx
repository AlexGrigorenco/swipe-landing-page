

const Title = ({text, maxWidth, anchor, size}) => {


  const styles = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '110%',
    fontSize: 'calc(36px + (70 - 36) * ((100vw - 320px) / (1800 - 320)))',
    maxWidth: maxWidth
  }
  
  if(size){
    styles.fontSize = `calc(32px + (${+size} - 32) * ((100vw - 320px) / (1900 - 320)))`
  }



  return ( 
    
    <>
    <h2 id={anchor ? anchor : null} className="relative z-10" style={styles}>
    {text}
    </h2>
    </>
   );
}
 
export default Title;


const Title = ({text, maxWidth, anchor}) => {


  const styles = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '110%',
    fontSize: 'calc(36px + (70 - 36) * ((100vw - 320px) / (1800 - 320)))',
    maxWidth: maxWidth
  }



  return ( 
    
    <>
    <h2 id={anchor} className="" style={styles}>
    {text}
    </h2>
    </>
   );
}
 
export default Title;
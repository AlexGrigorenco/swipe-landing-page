

const SquareLink = ({text}) => {
  return ( 

    <div style={{transition: '0.3s linear'}} className="inline-block hover:scale-105">
      <a style={{fontFamily: '"Poppins"'}} className=" flex flex-grow-0 items-center gap-[10px] uppercase fo" href="#/">
      <span className="w-[14px] h-[14px] bg-[#EA5959] block">
      </span>
      <span>{text}</span>
      </a>
    </div>

   );
}
 
export default SquareLink;
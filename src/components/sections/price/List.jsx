
import img from './../../../images/check-img.svg'

const List = () => {
  const list = [
    'Free 30-days trial period',
    'Professional design and guidelines for customization',
    'Unlimited amount of pages to change',
    '24/7 technical support',
    'Advenced security components',
  ]
  return ( 


    <ul className='flex flex-col gap-[10px] '>
      {list.map((item, i) => <li key={i} className='pl-[40px] relative'>
        <div className='w-[21px] h-[21px] absolute top-0 left-0'>
          <img src={img} alt="check" className='object-fill' />
        </div>
        {item}</li>)}
    </ul>
   );
}
 
export default List;
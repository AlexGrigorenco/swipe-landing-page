import HorizontalLine from "../HorizontalLine";

const cards = [{
  index: 1,
  title: 'Happy clients',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.',
  count: '1000+',
},
{
  index: 2,
  title: 'Products created',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.',
  count: '20+',
},
{
  index: 3,
  title: 'Investments received',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.',
  count: '$5M+',
}]


const Cards = () => {

  
  return ( 

    <div>
      {cards.map(item => 
      <div className="cards relative flex items-center justify-between flex-grow-2 gap-[20px] py-[30px]" key={item.index}>
        <HorizontalLine position='top-0 left-0' />
        <div className="flex flex-col gap-[20px]">
          <p className="text-[30px] leading-[42px]">
          {item.title}
          </p>
          <span className="max-w-[385px]">
        {item.text}
          </span>
        </div>
        <div>
          <p style={{fontSize: 'calc(36px + (70 - 36) * ((100vw - 320px) / (1800 - 320)))'}} className=" leading-[110%]">
            {item.count}
          </p>
        </div>
      </div>
      )}
    </div>

   );
}
 
export default Cards;
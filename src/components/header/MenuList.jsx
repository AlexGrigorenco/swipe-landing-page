


const MenuList = ({mobile}) => {

  const list = [
    {
      id:1,
      name: 'About',
      href: '#about'
    },
    {
      id:2,
      name: 'Features',
      href: '#features'
    },
    {
      id:3,
      name: 'Pricing',
      href: '#pricing'
    },
    {
      id:4,
      name: 'Team',
      href: '#team'
    },
    {
      id:5,
      name: 'FAQ',
      href: '#faq'
    },
    {
      id:6,
      name: 'Feedback',
      href: '#feedback'
    },
    {
      id:7,
      name: 'Blog',
      href: '#blog'
    },
    {
      id:8,
      name: 'Contact',
      href: '#contact'
    },
  ]
  return ( 

    <ul  className={mobile ? "flex flex-col gap-[24px] flex-wrap px-[10px]" : "flex gap-[24px] flex-wrap px-[10px]"}>

      {list.map(item => <li key={item.id} style={{transition: '0.3s linear'}} className="hover:scale-125"><a  href={item.href}>{item.name}</a></li>)}

    </ul>

   );
}
 
export default MenuList;
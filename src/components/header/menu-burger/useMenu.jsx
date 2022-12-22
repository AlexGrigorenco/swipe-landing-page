

import { useState } from 'react';

export function useMenu (){

  const [menuMobile, setMenuMobile] = useState(false)
  
    setMenuMobile(prev => !prev)  

  console.log(menuMobile)
  return menuMobile
}
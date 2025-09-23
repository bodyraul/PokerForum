import React from 'react'
import arowUp from '../../assets/img/arowUp.png'
import arrowDown from '../../assets/img/arrow.png'

export default function ThemeMsg({children,index,croissant,fonction}) {

  if(index===0){
    return (
    <p className='flex justify-center sup480:text-[12px] sup768:text-[14px] sup1024:text-[15px] sup1600:text-[18px] text-center text-[10px] text-vertFoncer  w-[150px]'>
        {children}
        <img onClick={fonction} className='sup480:w-[18px] sup768:w-[20px] hover:cursor-pointer w-[16px]'src={croissant===true? arowUp:arrowDown} alt=''  />
    </p>
    )
  }
  if(index!==0){
    return (
        <p className='flex justify-center sup480:text-[12px] sup768:text-[14px] sup1024:text-[15px] sup1600:text-[18px] text-center text-[10px] text-vertFoncer  w-[150px]'>
            {children}
        </p>
    )
  }

}

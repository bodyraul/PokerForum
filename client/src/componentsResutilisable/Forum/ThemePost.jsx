import React from 'react'
import arrowDown from "../../assets/img/arrow.png"
import arowUp from "../../assets/img/arowUp.png"

export default function ThemePost({children,index,fonction,croissant}) {
  
  if(index===0){
    return(
      <p className="flex justify-center sup480:text-[14px] sup768:text-[16px] sup1024:text-[18px] sup1600:text-[20px] w-1/4 text-center text-[10px]">
        {children} <img className='sup480:w-[18px] sup768:w-[20px] hover:cursor-pointer w-[16px]' onClick={fonction} src={croissant ? arowUp :arrowDown}  alt={croissant? "flêche vers le haut." : "flêche vers le bas."} />
      </p>
    )
  }
  if(index!==0){
    return(
          <p className="sup480:text-[14px] sup768:text-[16px] sup1024:text-[18px] sup1600:text-[20px] w-1/4 text-center text-[10px]">{children}</p>
    )
  }
}

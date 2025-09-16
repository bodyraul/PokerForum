import React from 'react'
import arrowDown from "../../assets/img/arrow.png"
import arowUp from "../../assets/img/arowUp.png"
import { useEffect } from 'react'

export default function ThemePost({children,index,fonction,croissant}) {
  
  
  if(index===0){
    return(
      <p className="flex justify-center sup480:text-[14px] sup768:text-[16px] sup1024:text-[18px] sup1600:text-[20px] w-1/4 text-center text-[11px]">
        {children} <img onClick={fonction} src={croissant ? arowUp :arrowDown}  alt="" />
      </p>
    )
  }
  if(index!==0){
    return(
          <p className="sup480:text-[14px] sup768:text-[16px] sup1024:text-[18px] sup1600:text-[20px] w-1/4 text-center text-[11px]">{children}</p>
    )
  }
}

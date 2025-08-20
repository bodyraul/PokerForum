import React from 'react'

export default function BottomContentPost({element}) {
  return (
    <div style={{borderBottom:"solid 1px",borderColor:"#e0e3e5"}} className=" sup480:h-[80px] sup768:h-[100px] sup1024:h-[120px] sup1600:h-[140px] h-[70px] flex items-center justify-center bg-blanc text-vertFoncer ">
        <p className="sup480:text-[12px] sup480:w-[75%]  sup480:leading-[16px] sup768:leading-[21px] sup768:text-[14px] sup1024:leading-[27px] sup1024:text-[15px]  sup1600:text-[16px] sup1600:leading-[30px] w-[80%]  text-[10px] leading-[14px] line-clamp-2 bg-grisFonce text-vertFoncer ">
        {element.titre}
        </p>
    </div>
  )
}

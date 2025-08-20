import React from 'react'

export default function BottomContenuPostMsg({element}) {
  return (
    <div className="flex items-center justify-center  text-vertFoncer ">
        <p className="VisibleContenu scroll-smooth sup480:text-[12px] sup480:min-h-[25px] sup480:max-h-[60px] sup480:w-[75%] sup480:leading-[18px] sup768:leading-[21px] sup768:max-h-[70px] sup768:min-h-[30px] sup768:pt-[4px] sup768:text-[14px] sup1024:leading-[27px] sup1024:text-[15px] sup1024:max-h-[87px] sup1024:min-h-[33px]  sup1600:text-[16px] sup1600:leading-[30px] sup1600:max-h-[97px] sup1600:min-h-[41px] w-[80%] min-h-[20px] max-h-[47px] pt-[2px] px-[10px] text-[10px] leading-[14px]  bg-grisFonce overflow-hidden overflow-y-scroll">
        {element.titre}
        </p>
    </div>
  )
}

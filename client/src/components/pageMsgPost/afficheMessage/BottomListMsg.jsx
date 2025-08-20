import React from 'react'

export default function BottomListMsg({element,titrecontenu}) {
  return (
    <p className="sup480:text-[12px] sup480:min-h-[25px] sup480:max-h-[60px] sup480:leading-[18px] sup768:leading-[21px] sup768:max-h-[70px] sup768:min-h-[30px] sup768:pt-[4px] sup768:text-[14px] sup1024:leading-[27px] sup1024:max-h-[87px] sup1024:min-h-[33px] sup1024:text-[15px]  sup1600:text-[16px] sup1600:leading-[30px] sup1600:max-h-[97px] sup1600:min-h-[41px] pt-[2px] px-[10px] VisibleContenu block relative overflow-hidden overflow-y-scroll w-full  text-vertFoncer text-[10px] min-h-[20px] max-h-[50px]  bg-grisFonce  " ref={titrecontenu}>
        {element.contenu}
    </p>
  )
}

import React from 'react'

export default function ErroMsgCategorie({errorMsgCategorie}) {
  return (
    <p className="sup480:text-[11px] sup480:pb-[18px] sup480:pt-[18px] sup768:pb-[22px] sup768:pt-[22px] sup768:text-[13px] sup1024:pb-[25px] sup1024:pt-[25px] sup1024:text-[15px] sup1600:text-[16px] sup1600:pb-[30px] sup1600:pt-[30px] text-[10px] pt-[15px] pb-[15px] flex items-center justify-center w-full my-0 mx-auto text-error   ">
        {errorMsgCategorie}
    </p>
)
}

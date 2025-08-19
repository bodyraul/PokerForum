import React from 'react'

export default function ErorMsgPost({errorMsgCreerPost,errorMsgPost}) {
  return (
    <p ref={errorMsgPost} className="sup480:text-[11px] sup480:pb-[18px] sup480:pt-[7px] sup768:pb-[22px] sup768:pt-[5px] sup768:text-[13px] sup1024:pb-[25px] sup1024:pt-[8px] sup1024:text-[15px] sup1600:text-[16px] sup1600:pb-[30px] text-[10px] pt-[6px] pb-[15px] text-error ">
        {" "}
        
        {errorMsgCreerPost}{" "}
    </p>
  )
}

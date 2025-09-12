import React from 'react'

export default function ErorMsgPost({errorMsgCreerPost,errorMsgPost}) {
  return (
    <p ref={errorMsgPost} className="sup480:text-[11px] sup480:h-[35px] sup768:text-[13px] sup768:h-[40px] sup1024:text-[15px] sup1024:h-[45px] sup1024:pb-[5px] sup1600:text-[16px] sup1600:h-[50px] text-[10px] h-[30px]  text-error  ">
        {" "}
        
        {errorMsgCreerPost}{" "}
    </p>
  )
}


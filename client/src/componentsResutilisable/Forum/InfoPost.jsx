import React from 'react'

export default function InfoPost({children} ) {
  return (
     <p className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[15px] sup1600:text-[18px] w-1/4 text-center text-[10px] text-vertFoncer">
       {children}
    </p>
  )
}

import React from 'react'

export default function LabelSignIn({label}) {
  return (
    <label className="sup480:text-[14px] sup480:mb-[14px] sup768:text-[16px] sup768:mb-[16px] sup1024:text-[18px] sup1024:mb-[18px] sup1600:text-[20px] sup1600:mb-[20px] mb-[12px] text-blanc text-[12px]" htmlFor="">
          {label}
    </label>
  )
}

import React from 'react'

export default function DivLabelSignUp({labelUn,LabelDeux}) {
  return (
    <div className="w-full flex items-start justify-evenly">
        <div className="w-[40%] flex items-center justify-center">
          <label className="sup480:text-[14px] sup768:text-[16px] sup1024:text-[18px] sup1600:text-[20px] text-blanc text-[12px]" htmlFor="">
            {labelUn}
          </label>
        </div>
        <div className="w-[40%] flex items-center justify-center">
          <label className="sup480:text-[14px] sup768:text-[16px] sup1024:text-[18px] sup1600:text-[20px]  text-blanc text-[12px]" htmlFor="">
            {LabelDeux}
          </label>
        </div>
      </div>
  )
}

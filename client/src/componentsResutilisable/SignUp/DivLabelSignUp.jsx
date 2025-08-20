import React from 'react'
import tab from '../../tools/tab/taLabelInputSignUp'

export default function DivLabelSignUp({nbUn,nbDeux}) {
  return (
    <div className="w-full flex items-start justify-evenly">
        <div className="w-[40%] flex items-center justify-center">
          <label htmlFor={tab.htmlFor[nbUn]} className="sup480:text-[14px] sup768:text-[16px] sup1024:text-[18px] sup1600:text-[20px] text-blanc text-[12px]" >
            {tab.text[nbUn]}
          </label>
        </div>
        <div className="w-[40%] flex items-center justify-center">
          <label htmlFor={tab.htmlFor[nbDeux]} className="sup480:text-[14px] sup768:text-[16px] sup1024:text-[18px] sup1600:text-[20px]  text-blanc text-[12px]" >
            {tab.text[nbDeux]}
          </label>
        </div>
      </div>
  )
}

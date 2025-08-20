import React from 'react'
import tab from '../../tools/tab/TabLabelInputSignIn'

export default function LabelSignIn({nb}) {
  return (
    <label htmlFor={tab.htlmFor[nb]} className="sup480:text-[14px] sup480:mb-[14px] sup768:text-[16px] sup768:mb-[16px] sup1024:text-[18px] sup1024:mb-[18px] sup1600:text-[20px] sup1600:mb-[20px] mb-[12px] text-blanc text-[12px]" >
          {tab.text[nb]}
    </label>
  )
}

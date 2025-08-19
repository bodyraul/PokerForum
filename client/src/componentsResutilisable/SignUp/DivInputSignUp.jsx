import React from 'react'

export default function DivInputSignUp({setnom,setprenom,placeholderUn,placeholderDeux}) {
  return (
    <div className="w-full flex items-start justify-evenly">
        <input
          className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer placeholder:text-blanc "
          placeholder={placeholderUn}
          type="text"
          onChange={(e)=>setnom(e.target.value)}
        />
        <input
          className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer placeholder:text-blanc "
          placeholder={placeholderDeux}
          type="text"
          onChange={(e)=>setprenom(e.target.value)}
        />
      </div>
  )
}

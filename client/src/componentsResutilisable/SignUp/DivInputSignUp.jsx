import React from 'react'
import tab from '../../tools/tab/taLabelInputSignUp'

export default function DivInputSignUp({nbUn,nbDeux,setnom,setprenom,seterrorMsg}) {
  return (
    <div className="w-full flex items-start justify-evenly">
        <input
          className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
          placeholder={tab.placeholder[nbUn]}
          type="text"
          onChange={(e)=>setnom(e.target.value)}
          onClick={()=>seterrorMsg("")}
          id={tab.id[nbUn]}
        />
        <input
          className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
          placeholder={tab.placeholder[nbDeux]}
          type="text"
          onChange={(e)=>setprenom(e.target.value)}
          onClick={()=>seterrorMsg("")}
          id={tab.id[nbDeux]}
        />
      </div>
  )
}

import React from 'react'


export default function TopContentMsg({element}) {
  return (
    <div className=" h-[40px] flex items-center justify-between bg-blanc text-vertFoncer w-[80%] my-0 mx-auto">
        <p className='sup480:text-[12px] sup768:text-[14px] sup1024:text-[15px] sup1600:text-[18px] text-center text-[10px] text-vertFoncer'>
            {" "+element.pseudoCreateurMessage}
        </p>
        <p className='sup480:text-[12px] sup768:text-[14px] sup1024:text-[15px] sup1600:text-[18px] text-center text-[10px] text-vertFoncer'>
            {" "+element.dateCreation}
        </p>
    </div>
  )
}

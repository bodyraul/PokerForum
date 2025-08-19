import React from 'react'

export default function InputSignIn({placeholder,seteur}) {
  return (
    <input
        className=" sup480:text-[12px] sup480:mb-[25px] sup768:text-[14px] sup768:mb-[30px] sup1024:mb-[35px] sup1024:text-[16px] sup1600:text-[18px] sup1600:mb-[40px] text-[10px]  rounded-lg focus:outline-blanc focus:outline-double mb-[20px] p-[6px] border border-solid border-blanc text-blanc bg-vertFoncer placeholder:text-blanc"
        placeholder={placeholder}
        type="text"
        onChange={(e)=>{seteur(e.target.value)}}
    />
  )
}

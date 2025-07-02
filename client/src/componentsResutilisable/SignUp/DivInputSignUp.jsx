import React from 'react'

export default function DivInputSignUp({setnom,setprenom,placeholderUn,placeholderDeux}) {
  return (
    <div className="w-full flex items-start justify-evenly">
        <input
          className="sup990:text-base sup990:placeholder:text-base focus:outline-blanc focus:outline-double mb-5 p-2 w-2/5 rounded-lg border border-solid border-blanc text-xs bg-vertFoncer placeholder:text-blanc placeholder:text-xs"
          placeholder={placeholderUn}
          type="text"
          onChange={(e)=>setnom(e.target.value)}
        />
        <input
          className="sup990:text-base sup990:placeholder:text-base focus:outline-blanc focus:outline-double mb-5 p-2 w-2/5 rounded-lg border border-solid border-blanc text-xs bg-vertFoncer placeholder:text-blanc placeholder:text-xs"
          placeholder={placeholderDeux}
          type="text"
          onChange={(e)=>setprenom(e.target.value)}
        />
      </div>
  )
}

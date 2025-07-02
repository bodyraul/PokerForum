import React from 'react'

export default function InputSignIn({placeholder,seteur}) {
  return (
    <input
        className="sup990:text-base rounded-lg focus:outline-blanc focus:outline-double mb-5 p-2 border border-solid border-blanc text-blanc text-xs bg-vertFoncer placeholder:text-blanc"
        placeholder={placeholder}
        type="text"
        onChange={(e)=>{seteur(e.target.value)}}
    />
  )
}

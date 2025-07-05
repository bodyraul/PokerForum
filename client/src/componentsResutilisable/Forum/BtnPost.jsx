import React from 'react'

export default function BtnPost({boolean,texte}) {
    const margin = boolean ? "sup990:ml-0" : "";
    const classBtn = `sup1256:px-4 sup1256:py-3 sup990:py-3 sup990:px-3 ${margin} sup670:text-base mr-4 ml-5 py-1 px-7 border-solid text-vertClair border border-vertClair rounded-lg text-xs transition-all duration-300 ease-in-out hover:bg-vertClair hover:text-blanc hover:border-blanc hover:cursor-pointer`
  return (
    <button className={classBtn}>
        {texte}
    </button>
  )
}

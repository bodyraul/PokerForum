import React from 'react'

export default function PartContenuConfidentialite({tab}) {
  return (
    <>
        <p className="font-semibold pl-[15px] pt-[5px] mb-[25px]">{tab.titre}</p>
        {tab.texte.map((element,index) => (
            <p key={index} className="pl-[15px] pt-[5px] mb-[25px]">{element}</p>
        ))}
    </>
  )
}

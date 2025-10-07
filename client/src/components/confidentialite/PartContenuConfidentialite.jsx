import React from 'react'

export default function PartContenuConfidentialite({tab}) {
  return (
    <>
        <p className="sup480:text-[13px] sup768:text-[15px] sup1024:text-[16px] sup1600:text-[17px] text-[12px] font-semibold pl-[15px] pt-[5px] mb-[25px]">{tab.titre}</p>
        {tab.texte.map((element,index) => (
            <p key={index} className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[15px] sup1600:text-[16px] text-[11px] pl-[15px] pt-[5px] mb-[25px]">{element}</p>
        ))}
    </>
  )
}

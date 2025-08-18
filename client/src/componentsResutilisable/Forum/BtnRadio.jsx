import React from 'react'
import Majradio from "../../fonction/MajRadio"

export default function BtnRadio({categories,setradioValue}) {
  return (
    <div className=" sup480:w-[384px] pb-0 pl-0 flex-col items-center justify-between w-full">
        {categories.map((element) => {
            return (
            <p
                className="sup480:text-[11px] sup480:pb-[11px] sup768:pb-[13px] sup768:text-[13px] sup1024:pb-[15px] sup1024:text-[15px] sup1600:pb-[18px] sup1600:text-[16px] text-[10px] flex items-center justify-between w-full text-vertFoncer  pb-[9px] "
                key={element._id}
            >
                <label htmlFor="">- {element.titre}</label>
                <input onClick={(e) => Majradio(e,setradioValue)} className="inputRadio sup480:w-[11px] sup768:w-[12px] sup1024:w-[13px] w-[9px] hover:cursor-pointer" type="radio" value={element.titre}/>
            </p>
            );
        })}
    </div>
  )
}

import React from 'react'
import Majradio from "../../fonction/MajRadio"

export default function BtnRadio({categories,setradioValue}) {
  return (
    <div className=" sup480:w-[384px]  pt-2  pb-0 pl-0 flex-col items-center justify-between w-full">
        {categories.map((element) => {
            return (
            <p
                className="sup480:text-[11px] sup768:text-[13px] sup1024:text-[15px] sup1600:text-[16px] text-[10px] flex items-center justify-between w-full text-vertFoncer  pb-6 "
                key={element._id}
            >
                <label htmlFor="">- {element.titre}</label>
                <input onClick={(e) => Majradio(e,setradioValue)} className="inputRadio" type="radio" value={element.titre}/>
            </p>
            );
        })}
    </div>
  )
}

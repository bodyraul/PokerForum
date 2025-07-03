import React from 'react'
import Majradio from "../../fonction/MajRadio"

export default function BtnRadio({categories,setradioValue}) {
  return (
    <div className="sup670:pt-2 sup670:pr-0 sup670:pb-0 sup670:pl-0 sup460:w-96  pt-2 pr-2 pb-0 pl-0 flex-col items-center justify-between w-full">
        {categories.map((element) => {
            return (
            <p
                class="sup670:text-base text-sm flex items-center justify-between w-full text-vertFoncer  pb-6"
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

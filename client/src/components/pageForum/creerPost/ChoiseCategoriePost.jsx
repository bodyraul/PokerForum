import React from 'react'
import BtnRadio from '../../../componentsResutilisable/Forum/BtnRadio'

export default function ChoiseCategoriePost({categories,setradioValue}) {
  return (
    <>
        <h3 className="sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-[11px]  text-vertFoncer pt-14 px-0 pb-4">
            Catégorie :{" "}
        </h3>
        <BtnRadio categories={categories} setradioValue={setradioValue} ></BtnRadio>
    </>
  )
}

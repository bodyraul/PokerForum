import React from 'react'
import BtnRadio from '../../../componentsResutilisable/Forum/BtnRadio'

export default function ChoiseCategoriePost({categories,setradioValue}) {
  return (
    <>
        <h3 className="sup480:text-[13px] sup480:pb-[27px] sup480:pt-[34px] sup768:pb-[32px] sup768:pt-[39px] sup768:text-[15px] sup1024:pb-[35px] sup1024:pt-[42px] sup1024:text-[17px] sup1600:pt-[50px] sup1600:pb-[43px] sup1600:text-[19px] text-[11px]  text-vertFoncer pt-[31px] px-0 pb-[22px]">
            Catégorie :{" "}
        </h3>
        <BtnRadio categories={categories} setradioValue={setradioValue} ></BtnRadio>
    </>
  )
}

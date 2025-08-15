import React from 'react'
import BtnRadio from '../../../componentsResutilisable/Forum/BtnRadio'

export default function ChoiseCategoriePost({categories,setradioValue}) {
  return (
    <>
        <h3 className="sup670:text-base text-sm text-vertFoncer pt-14 px-0 pb-4">
            Catégorie :{" "}
        </h3>
        <BtnRadio categories={categories} setradioValue={setradioValue} ></BtnRadio>
    </>
  )
}

import React from 'react'
import ThemeMsg from '../../../componentsResutilisable/Forum/ThemeMsg'
import UseTrieMsg from '../../../customHoocks/forum/UseTrieMsg'

export default function CategorieMsg({index,setMessage,message}) {

const{croissantAuteur,croissantDate,trieDate,triePseudo}=UseTrieMsg(setMessage,message);

  return (
    <div className=" h-[40px] flex items-center justify-around bg-blanc text-vertFoncer font-bold w-[100%] my-0 mx-auto border border-solid border-gris">
        <ThemeMsg index={index} croissant={croissantAuteur}  fonction={triePseudo} >Auteur</ThemeMsg>
        <ThemeMsg index={index} croissant={croissantDate}  fonction={trieDate} >Date</ThemeMsg>
    </div>
  )
}

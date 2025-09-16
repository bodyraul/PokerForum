import React from 'react'
import ThemePost from "../../../componentsResutilisable/Forum/ThemePost"
import UseTrie from '../../../customHoocks/forum/UseTrie'

export default function CategoriePost({index}) {

  const {trieDate,trieCategorie,triePseudo,trieReponse,croissantAuteur,croissantCategorie,croissantDate,croissantReponse}=UseTrie();

  return (
  <div className=" h-[48px] flex items-center border-solid border border-gris bg-blanc text-vertFoncer font-bold ">
        <ThemePost croissant={croissantCategorie} fonction={trieCategorie} index={index} >Catégories</ThemePost>
        <ThemePost croissant={croissantReponse} fonction={trieReponse} index={index} >Réponses</ThemePost>
        <ThemePost croissant={croissantAuteur} fonction={triePseudo} index={index} >Auteur</ThemePost>
        <ThemePost croissant={croissantDate} fonction={trieDate} index={index} >Date</ThemePost>
    </div>
  )
}

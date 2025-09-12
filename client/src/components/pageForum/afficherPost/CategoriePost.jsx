import React from 'react'
import ThemePost from "../../../componentsResutilisable/Forum/ThemePost"

export default function CategoriePost({index}) {
  console.log(index)
  return (
  <div className=" h-[48px] flex items-center border-solid border border-gris bg-blanc text-vertFoncer font-bold ">
        <ThemePost>Catégories</ThemePost>
        <ThemePost>Réponses</ThemePost>
        <ThemePost>Auteur</ThemePost>
        <ThemePost>Date</ThemePost>
    </div>
  )
}

import React from 'react'
import ThemePost from "../Forum/ThemePost"

export default function CategoriePost() {
  return (
  <div className=" h-[48px] flex items-center border-solid border border-gris bg-blanc text-vertFoncer font-bold ">
        <ThemePost>Catégorie</ThemePost>
        <ThemePost>Réponses</ThemePost>
        <ThemePost>Auteur</ThemePost>
        <ThemePost>Date</ThemePost>
    </div>
  )
}

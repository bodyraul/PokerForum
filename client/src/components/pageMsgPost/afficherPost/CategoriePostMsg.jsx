import React from 'react'
import ThemePost from '../../../componentsResutilisable/Forum/ThemePost'

export default function CategoriePostMsg() {
  return (
  <div className="sup480:px-[8px] sup768:px-[13px] sup1024:px-[20px] sup1600:px-[25px]  px-[5px]  h-[48px] flex items-center border-solid border border-gris bg-blanc text-vertFoncer font-bold ">
        <ThemePost>Catégorie</ThemePost>
        <ThemePost>Réponses</ThemePost>
        <ThemePost>Auteur</ThemePost>
        <ThemePost>Date</ThemePost>
    </div>
  )
}

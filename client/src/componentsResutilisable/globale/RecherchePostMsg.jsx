import React from 'react'
import { useNavigate } from 'react-router-dom'
import ScroolToSearchPost from '../../fonction/ScroolToSearchPost';


export default function RecherchePostMsg({texte}) {
  const navigate=useNavigate();
  const NavigateForum = ()=>{
    navigate("/forum")
  }
  return (
    <div className="sup1400:w-2/5 sup670:px-6 py-7 px-0 w-full flex-col items-center ">
        <div className=" sup1400:w-400 sup1400:ml-0 border-solid border-2 border-gris w-4/5 h-24 ml-8"></div>
        <h2 className="sup670:text-2xl sup1400:ml-0 ml-8 text-xl py-6 px-0 text-vertClair">
        Autre Post?
        </h2>
        <p className="sup670:text-lg sup1400:ml-0 text-vertClair text-sm pb-6 ml-8">
        Faites une recherche par sujet,auteur ou catégorie.
        </p>
        <button
        className="sup990:py-3 sup670:text-base sup1400:ml-0 text-sm ml-8 w-44 py-2 px-0 text-vertClair border-solid border border-vertClair bg-blanc rounded transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertClair hover:text-blanc"
        onClick={texte==="post"?ScroolToSearchPost:NavigateForum}
        >
        Accéder à la recherche
        </button>
    </div>
  )
}

import React from 'react'
import ScroolToSearchPost from '../../../fonction/ScroolToSearchPost';


export default function RecherchePostMsg() {
  return (
    <div className="sup1024:w-2/5 sup1600:px-[24px] sup1600:py-[0px] py-7 px-0 w-full flex-col items-center ">
        <div className="  sup1600:ml-0 border-solid border-2 border-gris w-4/5 h-24 ml-8"></div>
        <h2 className=" sup480:text-[16px] sup768:text-[19px] sup1024:text-[22px] sup1600:text-[25px] sup1600:ml-0 ml-[32px] text-[13px] py-[24px] px-0 text-vertClair">
        Autre Post?
        </h2>
        <p className="sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[18px] sup1600:ml-0 text-[11px] text-vertClair pb-[24px] ml-[32px]">
        Faites une recherche par sujet, auteur ou catégorie.
        </p>
        <button
        className="sup480:text-[13px] sup480:w-[160px] sup768:text-[15px] sup768:w-[170px] sup768:py-[10px] sup1024:text-[17px] sup1024:w-[190px] sup1024:py-[11px] sup1600:text-[18px] sup1600:w-[210px] sup1600:py-[12px] sup1600:ml-0 text-[11px]  ml-[32px] w-[150px] py-[8px] px-0 text-vertClair border-solid border border-vertClair bg-blanc rounded transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertClair hover:text-blanc"
        onClick={ScroolToSearchPost}
        >
        Accéder à la recherche
        </button>
    </div>
  )
}

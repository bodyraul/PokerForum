import React from 'react'
import cliqueSujet from '../../fonction/CliqueSujet'
import cliqueAuteur from '../../fonction/CliqueAuteur'
import tabBtnSujetAuteur from '../../tools/tab/TabBtnSujetAuteur';

export default function BtnSujetAuteur({nb,valueAuteurSujet,inputAuteur,inputSujet,inputsearchSujetAuteur,setvalueAuteurSujet}) {
  const fonction = tabBtnSujetAuteur.text[nb]==="Sujet"? cliqueSujet: cliqueAuteur;
  return (
    <button
        className={`sup480:mb-0 sup480:text-[13px] sup480:py-[4px] sup480:w-[60px] sup768:text-[15px] sup768:w-[70px] sup768:py-[5px] sup1024:text-[17px] sup1024:w-[80px] sup1600:text-[19px] sup1600:w-[90px] text-[10px]  ${tabBtnSujetAuteur.class.bg[nb]} ${tabBtnSujetAuteur.class.color[nb]} border-solid border border-vertFoncer ml-0 w-[56px]  hover:cursor-pointer`}
        ref={tabBtnSujetAuteur.text[nb]==="Sujet"? inputSujet: inputAuteur}
        onClick={()=>fonction(valueAuteurSujet,inputAuteur,inputSujet,inputsearchSujetAuteur,setvalueAuteurSujet)}
        >
        {tabBtnSujetAuteur.text[nb]}
    </button>
  )
}

import React from 'react'
import cliqueSujet from '../../fonction/CliqueSujet'
import cliqueAuteur from '../../fonction/CliqueAuteur'
import tabBtnSujetAuteur from '../../tools/tab/TabBtnSujetAuteur';

export default function BtnSujetAuteur({nb,valueAuteurSujet,inputAuteur,inputSujet,inputsearchSujetAuteur,setvalueAuteurSujet}) {
  const fonction = tabBtnSujetAuteur.text[nb]==="Sujet"? cliqueSujet: cliqueAuteur;
  return (
    <button
        className={`sup670:ml-4 sup670:text-base text-xs ${tabBtnSujetAuteur.class.bg[nb]} ${tabBtnSujetAuteur.class.color[nb]} border-solid border border-vertFoncer ml-0 w-14  hover:cursor-pointer`}
        ref={tabBtnSujetAuteur.text[nb]==="Sujet"? inputSujet: inputAuteur}
        onClick={()=>fonction(valueAuteurSujet,inputAuteur,inputSujet,inputsearchSujetAuteur,setvalueAuteurSujet)}
        >
        {tabBtnSujetAuteur.text[nb]}
    </button>
  )
}

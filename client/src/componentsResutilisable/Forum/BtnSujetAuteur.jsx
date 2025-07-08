import React from 'react'
import cliqueSujet from '../../fonction/CliqueSujet'
import cliqueAuteur from '../../fonction/CliqueAuteur'

export default function BtnSujetAuteur({texte,bg,color,valueAuteurSujet,inputAuteur,inputSujet,inputsearchSujetAuteur,setvalueAuteurSujet}) {
  const fonction = texte==="Sujet"? cliqueSujet: cliqueAuteur;
  return (
    <button
        className={`sup670:ml-4 sup670:text-base text-xs ${bg} ${color} border-solid border border-vertFoncer ml-0 w-14  hover:cursor-pointer`}
        ref={texte==="Sujet"? inputSujet: inputAuteur}
        onClick={()=>fonction(valueAuteurSujet,inputAuteur,inputSujet,inputsearchSujetAuteur,setvalueAuteurSujet)}
        >
        {texte}
    </button>
  )
}

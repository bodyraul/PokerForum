import React from 'react'
import RecherchePostMsg from '../../../componentsResutilisable/globale/RecherchePostMsg';
import CreerTitreMsg from './CreerTitreMsg';
import ErrorMsgMsg from './ErrorMsgMsg';

export default function CreerMessage({valueMsgForm,setvalueMsgForm,paraMessageErreur,setmessageErreur,messageErreur,valideFormMessage}) {

  return (
    <div className="sup1256:flex-row sup1256:items-start sup1256:justify-center sup1600:w-1400 w-full mx-auto mt-12 mb-0 flex flex-col items-start justify-center ">
        <div className="sup1256:ml-0 sup670:ml-14 sup1256::w-3/5 bg-blanc py-7 px-6 w-4/5 border-solid border-2 border-grisFonce ml-8">
          <CreerTitreMsg setmessageErreur={setmessageErreur} setvalueMsgForm={setvalueMsgForm} valueMsgForm={valueMsgForm} />
          <ErrorMsgMsg messageErreur={messageErreur} paraMessageErreur={paraMessageErreur} />
          <button
            className="sup670:text-base text-xs py-3 px-4 text-vertFoncer border-solid border border-vertFoncer bg-blanc rounded-md transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertFoncer hover:text-blanc"
            onClick={valideFormMessage}
          >
            Créer
          </button>
        </div>
        <RecherchePostMsg onclick="message"/>
      </div>
  )
}

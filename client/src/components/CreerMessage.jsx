import React from 'react'
import ParaNewPostMsg from '../componentsResutilisable/Forum/ParaNewPostMsg';
import RecherchePostMsg from './RecherchePostMsg';
import OnclickTextArea from './../fonction/OnclickTextArea';

export default function CreerMessage({valueMsgForm,setvalueMsgForm,paraMessageErreur,setmessageErreur,messageErreur,valideFormMessage}) {

  return (
    <div className="sup1256:flex-row sup1256:items-start sup1256:justify-center sup1600:w-1400 w-full mx-auto mt-12 mb-0 flex flex-col items-start justify-center ">
        <div className="sup1256:ml-0 sup670:ml-14 sup1256::w-3/5 bg-blanc py-7 px-6 w-4/5 border-solid border-2 border-grisFonce ml-8">
          <ParaNewPostMsg textresponsive="4xl" texte="2xl">     Créer un nouveau Message.</ParaNewPostMsg>
          <ParaNewPostMsg textresponsive="xl" texte="base">  Essayez d'apporter quelque chose de nouveau à la conversation.</ParaNewPostMsg>
          <ParaNewPostMsg textresponsive="base" texte="sm"> Description</ParaNewPostMsg>
          <div className="pt-1 pb-6 px-0">
            <textarea
              className="sup1256:w-auto sup670:text-base w-full outline-vertFoncer border-solid border border-vertFoncer text-vertFoncer py-3 px-2 resize-none text-xs"
              onClick={()=>OnclickTextArea(setmessageErreur)} value={valueMsgForm} onChange={(e) => setvalueMsgForm(e.target.value)} rows={15} cols={80}
            ></textarea>
          </div>
          <p className="text-error text-xl pb-6" ref={paraMessageErreur}>
            {" "}
            {messageErreur}{" "}
          </p>
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

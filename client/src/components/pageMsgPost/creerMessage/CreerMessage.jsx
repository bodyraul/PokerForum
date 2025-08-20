import React from 'react'
import CreerTitreMsg from './CreerTitreMsg';
import ErrorMsgMsg from './ErrorMsgMsg';

export default function CreerMessage({valueMsgForm,setvalueMsgForm,paraMessageErreur,setmessageErreur,messageErreur,valideFormMessage}) {

  return (
    <div className="sup480:mt-[34px] sup768:mt-[30px] sup1024:mt-[34px] sup1600:mt-[42px] w-full mx-auto mt-[30px] mb-0 flex flex-col items-center justify-center">
        <div className="sup480:w-[400px] sup768:w-[550px] sup1024:w-[700px] sup1600:w-[850px] w-[95%] bg-blanc py-7 px-6 border-solid border-2 border-grisFonce ">
          <CreerTitreMsg setmessageErreur={setmessageErreur} setvalueMsgForm={setvalueMsgForm} valueMsgForm={valueMsgForm} />
          <ErrorMsgMsg messageErreur={messageErreur} paraMessageErreur={paraMessageErreur}/>
          <button
            className="sup480:text-[11px] sup480:px-[14px] sup768:text-[13px] sup768:px-[16px] sup1024:text-[15px] sup1024:px-[18px] sup1600:text-[16px] sup1600:px-[20px] text-[10px] py-[8px] px-[12px] text-vertFoncer border-solid border border-vertFoncer bg-blanc rounded-md transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertFoncer hover:text-blanc"
            onClick={valideFormMessage}
          >
            Créer
          </button>
        </div>
      </div>
  )
}

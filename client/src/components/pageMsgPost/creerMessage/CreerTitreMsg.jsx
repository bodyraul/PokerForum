import React from 'react'
import TitreNewPostMsg from '../../../componentsResutilisable/globale/TitreNewPostMsg'
import OnclickTextArea from '../../../fonction/OnclickTextArea'

export default function CreerTitreMsg({setmessageErreur,valueMsgForm,setvalueMsgForm}) {
  return (
    <>
        <TitreNewPostMsg nb={0} sujet={"msg"}/>
        <TitreNewPostMsg nb={1} sujet={"msg"}/>
        <TitreNewPostMsg nb={2} sujet={"msg"}/>
        <div className="pt-1 pb-6 px-0">
        <textarea
            className="sup1256:w-auto sup670:text-base w-full outline-vertFoncer border-solid border border-vertFoncer text-vertFoncer py-3 px-2 resize-none text-xs"
            onClick={()=>OnclickTextArea(setmessageErreur)} value={valueMsgForm} onChange={(e) => setvalueMsgForm(e.target.value)} rows={15} cols={80}
        ></textarea>
        </div>
    </>
  )
}

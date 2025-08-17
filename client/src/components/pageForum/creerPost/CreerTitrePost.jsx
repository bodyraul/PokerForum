import React from 'react'
import TitreNewPostMsg from '../../../componentsResutilisable/globale/TitreNewPostMsg'

export default function CreerTitrePost({valueTitrePost,setvalueTitrePost,seterrorMsgCreerPost}) {
  return (
    <>
        <TitreNewPostMsg nb={0} sujet="post" > </TitreNewPostMsg>
        <TitreNewPostMsg nb={1} sujet="post" > </TitreNewPostMsg>
        <TitreNewPostMsg nb={2} sujet="post" > </TitreNewPostMsg>
        <input className="sup480:w-96 sup480:text-[12px] sup480:placeholder:text-[11px] sup768:text-[14px] sup768:placeholder:text-[13px] sup1024:text-[16px] sup1024:placeholder:text-[15px] sup1600:text-[17px] sup1600:placeholder:text-[16px] outline-vertFoncer border-solid border border-vertFoncer text-vertFoncer text-[10px] py-[4px] px-[8px] w-full placeholder:text-[9px]"
        placeholder="Entrez votre titre"type="text" value={valueTitrePost} 
        onChange={(e) => setvalueTitrePost(e.target.value)}  onClick={() => seterrorMsgCreerPost("")}
        />
    </>
  )
}

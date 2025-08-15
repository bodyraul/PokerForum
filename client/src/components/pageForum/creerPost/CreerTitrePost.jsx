import React from 'react'
import TitreNewPostMsg from '../../../componentsResutilisable/Forum/TitreNewPostMsg'

export default function CreerTitrePost({valueTitrePost,setvalueTitrePost,seterrorMsgCreerPost}) {
  return (
    <>
        <TitreNewPostMsg textresponsive="4xl" texte="2xl"> Créer un nouveau Post.</TitreNewPostMsg>
        <TitreNewPostMsg textresponsive="xl" texte="base"> Donnez votre point de vue sur un cas particulier.</TitreNewPostMsg>
        <TitreNewPostMsg textresponsive="base" texte="sm"> Titre :</TitreNewPostMsg>
        <input className="sup670:placeholder:text-base sup460:w-96 outline-vertFoncer border-solid border border-vertFoncer text-vertFoncer py-3 px-2 w-full placeholder:text-sm"
        placeholder="Entrez votre titre"type="text" value={valueTitrePost} 
        onChange={(e) => setvalueTitrePost(e.target.value)}  onClick={() => seterrorMsgCreerPost("")}
        />
    </>
  )
}

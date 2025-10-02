import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import SigneUpInContext from '../../Context/SIgneUpInContext';

export default function PartBtnConfidentialite() {
  const{setSignUp}=useContext(SigneUpInContext);
  const {setconfidentialite}=useContext(AuthContext);
  return (
    <div className="h-[100px] flex items-center justify-evenly">
      <button onClick={()=>{
          localStorage.setItem("confidentialiteForumAurelien", "oui")
          setconfidentialite(false);
      }} className=" border border-vertFoncer rounded-[10px] px-[10px] py-[5px] transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer " >Accepter</button>
      <button onClick={()=>{
        setconfidentialite(false);
        setSignUp(false);
      }} className=" border border-vertFoncer rounded-[10px] px-[10px] py-[5px] transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer " >Refuser</button>
    </div>
  )
}

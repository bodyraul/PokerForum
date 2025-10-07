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
      }} className="sup480:text-[14px] sup480:px-[6px] sup768:text-[16px] sup1024:text-[17px] sup1024:px-[7px] sup1600:text-[18px] text-[12px] px-[5px] py-[3px] border border-vertFoncer rounded-[10px]  transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer " >Accepter</button>
      <button onClick={()=>{
        setconfidentialite(false);
        setSignUp(false);
      }} className="sup480:text-[14px] sup480:px-[6px] sup768:text-[16px] sup1024:text-[17px] sup1024:px-[7px] sup1600:text-[18px] text-[12px] px-[5px] py-[3px] border border-vertFoncer rounded-[10px] transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer " >Refuser</button>
    </div>
  )
}

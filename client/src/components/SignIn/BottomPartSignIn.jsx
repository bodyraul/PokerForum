import React from 'react'
import { useContext } from 'react'
import SigneInContext from '../../Context/SignInContext'
import onSubmitsSignIn from '../../fonction/nav/OnSubmitSignIn';

export default function BottomPartSignIn() {
    const {email,password,settoken,setpseudo,setSignIn,signIn,seterrorMsg,setemail,setpassword,errorMsg}= useContext(SigneInContext);
  return (
    <>
        <div className="flex items-center justify-between w-full">
            <button onClick={()=>onSubmitsSignIn(email,password,settoken,setpseudo,setSignIn,signIn,seterrorMsg,setemail,setpassword)} className="sup480:text-[12px] sup480:py-[9px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] sup990:w-full w-full  py-[8px] border border-solid rounded-lg border-blanc text-blanc bg-vertFoncer transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-vertFoncer hover:bg-blanc hover:text-vertFoncer">
            Connexion
            </button>
        </div>
        <p className="sup480:text-[13px] sup480:pt-[14px] sup768:text-[15px] sup768:pt-[16px] sup1024:text-[17px] sup1024:pt-[18px] sup1600:text-[19px] sup1600:pt-[19px] text-[11px] text-error pt-[12px] ">{errorMsg} </p>
    </>
  )
}

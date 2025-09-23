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
        <p className="flex items-center justify-center sup480:text-[13px] sup480:translate-y-[14px] sup768:text-[15px] sup1024:text-[17px] sup1024:h-[30px] sup1600:text-[19px] sup1600:h-[40px] text-[11px] h-[20px] text-errorDeux transform translate-y-[10px] ">{errorMsg} </p>
    </>
  )
}

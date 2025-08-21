import React from 'react'
import { useContext } from 'react'
import SigneUpContext from '../../Context/SignUpContext'
import onSubmitsSignUp from '../../fonction/nav/OnSubmitSignUp'

export default function BottomPartSignUp() {
    const {nom,prenom,pseudonyme,email,password,confirmMdp,setSignUp,signUp,seterrorMsg,
    setSignIn,signIn,errorMsg,setnom,setprenom,setpseudonyme,setemail,setpassword,setconfirmMdp}=useContext(SigneUpContext)
  return (
     <>
        <div className=" sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-error w-full text-center text-[12px]">{errorMsg}</div>
        <div className="flex items-center justify-center w-full">
            <button className="sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-[11px] w-[35%] p-[7px] rounded-lg border border-solid border-blanc transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-bleu hover:bg-blanc hover:text-vertFoncer text-blanc bg-vertFoncer  "
            onClick={()=>onSubmitsSignUp(nom,prenom,pseudonyme,email,password,confirmMdp,setSignUp,signUp,seterrorMsg,setSignIn,signIn
            ,setnom,setprenom,setpseudonyme,setemail,setpassword,setconfirmMdp)}
            >
            Créer
            </button>
        </div>
     </>
  )
}

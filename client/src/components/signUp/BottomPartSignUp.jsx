import React from 'react'
import { useContext } from 'react'
import SigneUpContext from '../../Context/SignUpContext'
import onSubmitsSignUp from '../../fonction/nav/OnSubmitSignUp'
import { useRef } from 'react'
import { useEffect } from 'react'
import activeBtnCreer from '../../fonction/nav/ActiveBtnCreer'


export default function BottomPartSignUp() {
    const {errTypeSignUp, seterrTypeSignUp,errNbSignUp, seterrNbSignUp,setvalueInputSignUp,valueInputSignUp,setSignUp,signUp,seterrorMsg,setSignIn,signIn,setmdpCacher}=useContext(SigneUpContext);

      const btnref=useRef();

      useEffect(() => {
        activeBtnCreer(errTypeSignUp,errNbSignUp,btnref);
      }, )
      
  return (
     <>
        <div className=" sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-error w-full text-center text-[12px]"></div>
        <div className="flex items-center justify-center w-full">
            <button ref={btnref} className="sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-[11px] w-[35%] p-[7px] rounded-lg border border-solid border-errorDeux  text-errorDeux bg-vertFoncer  "
            onClick={()=>onSubmitsSignUp(seterrTypeSignUp,seterrNbSignUp,setvalueInputSignUp,valueInputSignUp,setSignUp,signUp,seterrorMsg,setSignIn,signIn,setmdpCacher)}
            >
            Créer
            </button>
        </div>
     </>
  )
}

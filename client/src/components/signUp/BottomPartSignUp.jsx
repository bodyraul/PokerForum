import React from 'react'
import { useContext } from 'react'
import SigneUpContext from '../../Context/SignUpContext'
import onSubmitsSignUp from '../../fonction/nav/OnSubmitSignUp'
import { useRef } from 'react'
import { useEffect } from 'react'
import activeBtnCreer from '../../fonction/nav/ActiveBtnCreer'
import SigneUpInContext from '../../Context/SIgneUpInContext'

export default function BottomPartSignUp() {
    const {errTypeSignUp, seterrTypeSignUp,errNbSignUp, seterrNbSignUp,setvalueInputSignUp,valueInputSignUp,setSignUp,signUp,setSignIn,signIn,setmdpCacher}=useContext(SigneUpContext);

    const btnref=useRef();
    const{errMsgNav,seterrMsgNav}=useContext(SigneUpInContext);

    useEffect(() => {
      activeBtnCreer(errTypeSignUp,errNbSignUp,btnref);
    }, )
      
  return (
     <>
        <div className=" sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-error w-full text-center text-[12px]"></div>
        <div className="flex flex-col items-center justify-center w-full">
            <button ref={btnref} className="sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-[11px] w-[35%] p-[7px] rounded-lg border border-solid border-errorDeux  text-errorDeux bg-vertFoncer  "
            onClick={()=>onSubmitsSignUp(seterrTypeSignUp,seterrNbSignUp,setvalueInputSignUp,valueInputSignUp,setSignUp,signUp,errMsgNav,seterrMsgNav,setSignIn,signIn,setmdpCacher)}
            >
            Créer
            </button>
            <p  className=" flex items-center justify-center sup480:text-[13px] sup480:translate-y-[16px] sup768:text-[15px] sup768:translate-y-[17px] sup1024:text-[17px] sup1024:h-[30px] sup1600:text-[19px] sup1600:h-[40px] sup1600:translate-y-[15px] text-[11px] h-[10px] text-errorDeux transform translate-y-[18px] ">{errMsgNav.signUp} </p>
        </div>
     </>
  )
}

import React from 'react'
import croix from '../../assets/img/croix.png'
import SigneUpContext from '../../Context/SignUpContext'
import { useContext } from 'react'
import resetSignUp from '../../fonction/nav/ResetSignUp'
import SigneUpInContext from '../../Context/SIgneUpInContext'

export default function TopPartSignUp() {
  const{setSignUp,signUp,setvalueInputSignUp,seterrTypeSignUp,seterrNbSignUp,setmdpCacher}=useContext(SigneUpContext);
  const {errMsgNav,seterrMsgNav}=useContext(SigneUpInContext);

  return (
    <div className="flex items-center justify-center w-full relative text-blanc">
        <h2 className="sup480:text-[18px] sup480:mb-[3px] sup768:text-[21px] sup768:mb-[5px] sup1024:mb-[7px] sup1024:text-[24px] sup1600:text-[30px] text-[15px] ">Créer un compte</h2>
        <button onClick={()=>{
            setSignUp(!signUp);
            seterrTypeSignUp({...resetSignUp("resetErrTypeSignUp")});
            seterrNbSignUp({...resetSignUp("resetErrNbSignUp")});
            setvalueInputSignUp({...resetSignUp("resetValueInput")});
            setmdpCacher({...resetSignUp("resetCacherMdp")});
            seterrMsgNav({
              ...errMsgNav,signUp:""
            })
        }} className="sup480:top-[-1px] sup768:top-[2px] sup1024:top-[6px] size-7 absolute right-0  rounded-full border-none bg-noir  transition-all hover:scale-[1.2] hover:cursor-pointer ">
        <img  className="sup480:w-[19px] sup768:w-[21px] sup1024:w-[24px] sup1600:w-[27px] w-[17px]" src={croix} alt="" />
        </button>
    </div>
  )
}

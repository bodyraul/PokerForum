import React, { useContext,useRef,useState } from 'react'
import croix from "../../assets/img/croix.png"
import AuthContext from '../../Context/AuthContext'
import LabelSignIn from '../../componentsResutilisable/SignIn/LabelSignIn'
import InputSignIn from '../../componentsResutilisable/SignIn/InputSignIn'
import onSubmitsSignIn from '../../fonction/OnSubmitSignIn'
import UseLoadSignIn from '../../customHoocks/UseLoadSignIn'

export default function SignIn({signInProps,setSignInProps}) {
  const formSignIn = useRef();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const{settoken} = useContext(AuthContext)
  
  UseLoadSignIn(signInProps,formSignIn);
  
  return (
     <form onSubmit={(e)=>e.preventDefault()} ref={formSignIn} className="sup480:w-[300px] sup480:p-[30px] sup768:w-[340px] sup768:p-[32px] sup1024:w-[380px] sup1600:w-[420px]  fixed top-[50%] left-[50%] w-[240px]  bg-gradient-to-r from-vertFoncer from-0%  to-vertClair to-100% z-50 -translate-y-2/4 -translate-x-2/4 rounded-3xl p-[28px] hidden flex-col items-center justify-between">
      <div className=" flex items-center justify-between w-full text-blanc ">
        <h2 className="sup480:text-[18px] sup480:pb-[18px] sup768:text-[21px] sup768:pb-[21px] sup1024:text-[24px] sup1024:pb-[24px] sup1600:text-[27px] sup1600:pb-[27px] pb-[15px] text-[15px] ">Se connecter</h2>
        <button onClick={()=>{setSignInProps(!signInProps)}} className="sup480:size-[19px] sup480:top-[34.3px] sup768:size-[21px] sup768:top-[36px] sup1024:size-[24px] sup1024:top-[40px] sup1300:size-[27px]  size-[17px] absolute right-[20px] top-[32px] rounded-s-full border-none bg-noir">
          <img className="transition-all hover:scale-[1.2] hover:cursor-pointer" src={croix} alt=""/>
        </button>
      </div>
      <div className="sup480:mb-[7px] sup768:mb-[8px] sup1024:mb-[9px] sup1600:mb-[10px] w-full flex flex-col items-start justify-between mb-[6px]">
        <LabelSignIn label="Email" />
        <InputSignIn placeholder="texte@exemple.com" seteur={setemail}/>
        <LabelSignIn label="Password" />
        <InputSignIn placeholder="*******" seteur={setpassword}/>
      </div>
      <div className="flex items-center justify-between w-full">
        <button onClick={()=>onSubmitsSignIn(email,password,settoken)} className="sup480:text-[12px] sup480:py-[9px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] sup990:w-full w-full  py-[8px] border border-solid rounded-lg border-blanc text-blanc bg-vertFoncer transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-vertFoncer hover:bg-blanc hover:text-vertFoncer">
          Connexion
        </button>
      </div>
      <p className="sup480:text-[13px] sup480:pt-[14px] sup768:text-[15px] sup768:pt-[16px] sup1024:text-[17px] sup1024:pt-[18px] sup1600:text-[19px] sup1600:pt-[19px] text-[11px] text-error pt-[12px] ">bonjour </p>
      
    </form>
  )
}

import React, { useContext,useRef,useState } from 'react'
import croix from "../assets/img/croix.png"
import AuthContext from '../Context/AuthContext'
import LabelSignIn from '../componentsResutilisable/SignIn/LabelSignIn'
import InputSignIn from '../componentsResutilisable/SignIn/InputSignIn'
import onSubmitsSignIn from '../fonction/OnSubmitSignIn'
import UseLoadSignIn from '../customHoocks/UseLoadSignIn'

export default function SignIn({signInProps,setSignInProps}) {
  const formSignIn = useRef();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const{token,settoken} = useContext(AuthContext)
  
  UseLoadSignIn(signInProps,formSignIn);
  
  return (
     <form onSubmit={(e)=>e.preventDefault()} ref={formSignIn} className="sup377:w-[350px] sup990:w-[418px] sup990:p-9 fixed top-2/4 left-2/4 w-full h-500 bg-gradient-to-r from-vertFoncer from-0%  to-vertClair to-100% z-50 -translate-y-2/4 -translate-x-2/4 rounded-3xl p-7 hidden flex-col items-center justify-between">
      <div className="sup990:text-2xl flex items-center justify-between w-full text-blanc text-xl ">
        <h2 className="pb-[15px] text-[25px] ">Se connecter</h2>
        <button onClick={()=>{setSignInProps(!signInProps)}} className="size-7 absolute right-5 rounded-s-full border-none bg-noir">
          <img className="transition-all hover:rotate-90 hover:cursor-pointer" src={croix} alt=""/>
        </button>
      </div>
      <div className="w-full flex flex-col items-start justify-between">
        <LabelSignIn label="Email" />
        <InputSignIn placeholder="texte@exemple.com" seteur={setemail}/>
        <LabelSignIn label="Password" />
        <InputSignIn placeholder="*******" seteur={setpassword}/>
      </div>
      <div className="flex items-center justify-between w-full">
        <button onClick={()=>onSubmitsSignIn(email,password,settoken)} className="sup990:text-base sup990:w-full w-10/12 p-2 border border-solid rounded-lg border-blanc text-blanc bg-vertFoncer text-xs transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-vertFoncer hover:bg-blanc hover:text-vertFoncer">
          Connexion
        </button>
      </div>
      <p className="sup990:text-xl text-error text-base h-6"></p>
      <div className="sup990:text-lg flex items-center justify-between w-full text-blanc text-base">
        <p>Vous n'avez toujours pas de compte? Créer</p>
      </div>
    </form>
  )
}

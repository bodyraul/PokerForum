import React, { useEffect,useRef,useState } from 'react'
import croix from "../assets/img/croix.png"
import axios from 'axios'
import DivLabelSignUp from '../componentsResutilisable/SignUp/DivLabelSignUp'
import DivInputSignUp from '../componentsResutilisable/SignUp/DivInputSignUp'

export default function SignUp({signUpProps,setSignUpProps}) {

  const [nom, setnom] = useState("")
  const [prenom, setprenom] = useState("")
  const [pseudonyme, setpseudonyme] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmMdp, setconfirmMdp] = useState("")
  const formSignUp = useRef();


   useEffect(() => {
      if(signUpProps===false){
        formSignUp.current.style.display="none";
      }
      if(signUpProps===true){
        formSignUp.current.style.display="flex";
      }
      
    }, [signUpProps])

    const onSubmits =()=>{
      const user = {nom, prenom, pseudonyme, email, password}
      axios.post("http://localhost:5000/user/register",user)
      .then((res)=>(console.log(res) ))
      .catch((err)=>(console.log(err)))
    }

  return (
    <form
    onSubmit={(e)=>e.preventDefault()}
    ref={formSignUp}
      className="sup377:w-[350px] sup990:px-4 sup990:w-[600px] sup990:h-[680px] fixed top-2/4 left-2/4 w-full h-[600px]  bg-gradient-to-r from-vertFoncer from-0%  to-vertClair to-100% z-50 -translate-x-2/4 -translate-y-2/4 rounded-3xl py-9 px-3 hidden flex-col items-center justify-between "
    >
      <div className="flex items-center justify-center w-full relative text-blanc">
        <h2 className="sup990:text-2xl text-lg">Créer un compte</h2>
        <button
          onClick={()=>{
            setSignUpProps(!setSignUpProps)
            }}
          className="size-7 absolute right-0 rounded-full border-none bg-noir transition-all duration-200 ease-in-out hover:rotate-90 hover:cursor-pointer"
        >
          <img  className="w-7" src={croix} alt="" />
        </button>
      </div>
      <DivLabelSignUp labelUn="Nom" LabelDeux="Prenom" />
      <DivInputSignUp setnom={setnom} setprenom={setprenom} placeholderUn="exemple : Peria" placeholderDeux="exemple : Aurélien" />
      <DivLabelSignUp labelUn="Pseudonyme" LabelDeux="Mail" />
      <DivInputSignUp setnom={setpseudonyme} setprenom={setemail} placeholderUn="exemple : Spiderman" placeholderDeux="texte@exemple.com" />
      <DivLabelSignUp labelUn="Mot de passe" LabelDeux="Confirmation" />
      <DivInputSignUp setnom={setpassword} setprenom={setconfirmMdp} placeholderUn="*******" placeholderDeux="*******" />
      <div className="sup990:text-2xl sup990:h-7 text-error text-lg h-6 w-full text-center">
        
      </div>
      <div className="flex items-center justify-center w-full">
        <button onClick={onSubmits} className="sup990:text-base w-2/5 p-2 rounded-lg border border-solid border-blanc transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-bleu hover:bg-blanc hover:text-vertFoncer text-blanc bg-vertFoncer text-sm ">
          Créer
        </button>
      </div>
    </form>
  )
}

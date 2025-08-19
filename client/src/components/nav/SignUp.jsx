import React, { useRef,useState } from 'react'
import croix from "../../assets/img/croix.png"
import DivLabelSignUp from '../../componentsResutilisable/SignUp/DivLabelSignUp'
import DivInputSignUp from '../../componentsResutilisable/SignUp/DivInputSignUp'
import onSubmitsSignUp from '../../fonction/OnSubmitSignUp'
import UseLoadSignUp from '../../customHoocks/UseLoadSignUp'

export default function SignUp({signUpProps,setSignUpProps}) {

  const [nom, setnom] = useState("")
  const [prenom, setprenom] = useState("")
  const [pseudonyme, setpseudonyme] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmMdp, setconfirmMdp] = useState("")
  const formSignUp = useRef();

  UseLoadSignUp(signUpProps,formSignUp);

  return (
    <form
    onSubmit={(e)=>e.preventDefault()}
    ref={formSignUp}
      className="sup377:w-[350px] sup480:h-[570] sup480:w-[400px] sup768:w-[470px] sup768:h-[620px]  sup1024:w-[530px] sup1024:h-[680px] sup1600:h-[720px] sup1600:w-[550px] fixed top-2/4 left-2/4 w-full h-[550px]  bg-gradient-to-r from-vertFoncer from-0%  to-vertClair to-100% z-50 -translate-x-2/4 -translate-y-2/4 rounded-3xl py-[39px] px-[12px] hidden flex-col items-center justify-between "
    >
      <div className="flex items-center justify-center w-full relative text-blanc">
        <h2 className="sup480:text-[18px] sup480:mb-[3px] sup768:text-[21px] sup768:mb-[5px] sup1024:mb-[7px] sup1024:text-[24px] text-[15px] ">Créer un compte</h2>
        <button
          onClick={()=>{
            setSignUpProps(!setSignUpProps)
            }}
          className="sup480:top-[-1px] sup768:top-[2px] sup1024:top-[6px] size-7 absolute right-0  rounded-full border-none bg-noir  transition-all hover:scale-[1.2] hover:cursor-pointer "
        >
          <img  className="sup480:w-[19px] sup768:w-[21px] sup1024:w-[24px] sup1600:w-[27px] w-[17px]" src={croix} alt="" />
        </button>
      </div>
      <DivLabelSignUp labelUn="Nom" LabelDeux="Prenom" />
      <DivInputSignUp setnom={setnom} setprenom={setprenom} placeholderUn="exemple : Peria" placeholderDeux="exemple : Aurélien" />
      <DivLabelSignUp labelUn="Pseudonyme" LabelDeux="Mail" />
      <DivInputSignUp setnom={setpseudonyme} setprenom={setemail} placeholderUn="exemple : Spiderman" placeholderDeux="texte@exemple.com" />
      <DivLabelSignUp labelUn="Mot de passe" LabelDeux="Confirmation" />
      <DivInputSignUp setnom={setpassword} setprenom={setconfirmMdp} placeholderUn="*******" placeholderDeux="*******" />
      <div className=" sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-error w-full text-center text-[12px]"> </div>
      <div className="flex items-center justify-center w-full">
        <button onClick={()=>onSubmitsSignUp(nom,prenom,pseudonyme,email,password)} className="sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-[11px] w-[35%] p-[7px] rounded-lg border border-solid border-blanc transition-all duration-200 ease-in-out hover:cursor-pointer hover:border-bleu hover:bg-blanc hover:text-vertFoncer text-blanc bg-vertFoncer  ">
          Créer
        </button>
      </div>
    </form>
  )
}

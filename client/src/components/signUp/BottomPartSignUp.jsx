import React from 'react'
import { useContext } from 'react'
import SigneUpContext from '../../Context/SignUpContext'
import onSubmitsSignUp from '../../fonction/nav/OnSubmitSignUp'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function BottomPartSignUp() {
    const {nom,prenom,pseudonyme,email,password,confirmMdp,setSignUp,signUp,seterrorMsg,setSignIn,signIn,errorMsg,
      setnom,setprenom,setpseudonyme,setemail,setpassword,setconfirmMdp,seterrorTypeNom,errorTypeNom,errorNbNom,seterrorNbNom,
      errorTypePrenom,seterrorTypePrenom,errorNbPrenom,seterrorNbPrenom,errorNbPseudo,seterrorNbPseudo,errorTypeMail,
      seterrorTypeMail,errorNbMail,seterrorNbMail,errorTypeMdp,seterrorTypeMdp,errorNbMdp,seterrorNbMdp,
      errorConfirmMdp,seterrorConfirmMdp}=useContext(SigneUpContext);

      const btnref=useRef();

      useEffect(() => {
        activerBtn();
      }, )
      

      function activerBtn(){
         if(!errorTypeNom && !errorNbNom && !errorTypePrenom && !errorNbPrenom && !errorNbPseudo && !errorTypeMail && !errorNbMail && !errorNbMdp && !errorConfirmMdp){
             console.log("non");
             btnref.current.disabled = false;
             btnref.current.style.color = "#D6FBD5";
             btnref.current.style.borderColor = "#D6FBD5";

         }
         else{
            btnref.current.disabled = true;
            btnref.current.style.color = "#FBD5D5";
            btnref.current.style.borderColor = "#FBD5D5";
         }
      }
   
  return (
     <>
        <div className=" sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-error w-full text-center text-[12px]">{errorMsg}</div>
        <div className="flex items-center justify-center w-full">
            <button ref={btnref} className="sup480:text-[13px] sup768:text-[15px] sup1024:text-[17px] sup1600:text-[19px] text-[11px] w-[35%] p-[7px] rounded-lg border border-solid border-errorDeux  text-errorDeux bg-vertFoncer  "
            onClick={()=>console.log("click")}
            // onClick={()=>onSubmitsSignUp(nom,prenom,pseudonyme,email,password,confirmMdp,setSignUp,signUp,seterrorMsg,setSignIn,signIn
            // ,setnom,setprenom,setpseudonyme,setemail,setpassword,setconfirmMdp)}
            >
            Créer
            </button>
        </div>
     </>
  )
}

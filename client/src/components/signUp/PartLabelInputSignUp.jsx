import React from 'react'
import DivLabelSignUp from '../../componentsResutilisable/SignUp/DivLabelSignUp'
import DivInputSignUp from '../../componentsResutilisable/SignUp/DivInputSignUp'
import { useContext } from 'react'
import SigneUpContext from '../../Context/SignUpContext'
import regexMail from '../../fonction/regex/RegexMail'
import regexNom from '../../fonction/regex/RegexNom'
import regexCaractereSpecialMdp from '../../fonction/regex/RegexCaractereSpecialMdp'
import regexMajusculeMdp from '../../fonction/regex/RegexMajusculeMdp'
import regexChiffreMdp from '../../fonction/regex/RegexChiffreMdp'
import regexMinusculeMdp from '../../fonction/regex/RegexMinuscukeMdp'

export default function PartLabelInputSignUp() {
    const{seterrorMsg,setnom,setprenom,setpseudonyme,setemail,setpassword,setconfirmMdp,nom,prenom,pseudonyme,email,password
    ,confirmMdp,seterrorTypeNom,errorTypeNom,errorNbNom, seterrorNbNom,errorTypePrenom,seterrorTypePrenom,errorNbPrenom
    ,seterrorNbPrenom,errorNbPseudo,seterrorNbPseudo,errorTypeMail,seterrorTypeMail,errorNbMail,seterrorNbMail,errorTypeMdp,
    seterrorTypeMdp,errorNbMdp,seterrorNbMdp,errorConfirmMdp,seterrorConfirmMdp}=useContext(SigneUpContext);

    const couleurSecuriteMdp = ()=>{
      if(errorTypeMdp==="Sécurité faible"){
        return "bg-errorDeux"
      }
      if(errorTypeMdp==="Sécurité moyenne"){
        return "bg-errorTrois"
      }
      if(errorTypeMdp==="Sécurité forte"){
        return "bg-valide"
      }
    }

    function test(e){
      if(errorTypeMdp !== "Sécurité faible"){
        console.log("faible")
        if(e.target.value.length<8){
          return seterrorTypeMdp("Sécurité faible");
        }
        if(regexMinusculeMdp(e.target.value)){
          if((regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value))){
            return seterrorTypeMdp("Sécurité faible");
          }
        }
        if(regexMajusculeMdp(e.target.value)){
          if((regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
            return seterrorTypeMdp("Sécurité faible");
          }
        }
        if(regexChiffreMdp(e.target.value)){
          if((regexCaractereSpecialMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
           return seterrorTypeMdp("Sécurité faible");
          }
        }
        if(regexCaractereSpecialMdp(e.target.value)){
          if((regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
            return seterrorTypeMdp("Sécurité faible");
          }
        }
        if(!regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value)){
          return seterrorTypeMdp("Sécurité faible");
        }
      }
      if((errorTypeMdp !== "Sécurité moyenne")&&(e.target.value.length>=8 )){
        console.log("moyen")
        if(regexMinusculeMdp(e.target.value)){
          if((regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value))||(regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value))){
            return seterrorTypeMdp("Sécurité moyenne");
          }
        }
        if(regexMajusculeMdp(e.target.value)){
          if((regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
            return seterrorTypeMdp("Sécurité moyenne");
          }
        }
        if(regexChiffreMdp(e.target.value)){
          if((regexCaractereSpecialMdp(e.target.value) && regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(regexCaractereSpecialMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
           return seterrorTypeMdp("Sécurité moyenne");
          }
        }
        if(regexCaractereSpecialMdp(e.target.value)){
          if((regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))||(!regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
            return seterrorTypeMdp("Sécurité moyenne");
          }
        }
      }
      if((errorTypeMdp !== "Sécurité moyenne")&&(e.target.value.length>=8 && e.target.value.length<10 )){
        console.log("moyen")
        if(regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value)){
          return seterrorTypeMdp("Sécurité moyenne");
        }
      }
      if(errorTypeMdp !== "Sécurité forte" && e.target.value.length>=10){
        console.log("fort")
        if(regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value)){
          return seterrorTypeMdp("Sécurité forte");
        }
      }
    }

  return (
    <>
        <DivLabelSignUp nbUn={0} nbDeux={1}/>
        <div className="w-full flex items-start justify-evenly">
          <input
            className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
            placeholder="exemple : Peria"
            type="text"
            onChange={(e)=>{
              setnom(e.target.value);
              if(regexNom(e.target.value)===true && errorTypeNom===true){
                seterrorTypeNom(false);
              }
              if(regexNom(e.target.value)===false && errorTypeNom === false){
                seterrorTypeNom(true);
              }
              if(e.target.value.length >=2 && errorNbNom===true){
                seterrorNbNom(false);
              }
              if(e.target.value.length< 2 && errorNbNom === false){
                seterrorNbNom(true);
              }
            }}
            onClick={()=>seterrorMsg("")}
            id="Nom"
            value={nom}
          />
          <input
            className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
            placeholder="exemple : Aurélien"
            type="text"
            onChange={(e)=>{
              setprenom(e.target.value);
              if(regexNom(e.target.value)===true && errorTypePrenom===true){
                seterrorTypePrenom(false);
              }
              if(regexNom(e.target.value)===false && errorTypePrenom === false){
                seterrorTypePrenom(true);
              }
              if(e.target.value.length >=2 && errorNbPrenom===true){
                seterrorNbPrenom(false);
              }
              if(e.target.value.length< 2 && errorNbPrenom === false){
                seterrorNbPrenom(true);
              }
            }}
            onClick={()=>seterrorMsg("")}
            id="prenom"
            value={prenom}
          />
        </div>


        <div className={`w-full flex items-start justify-evenly  `}>
          <div className='flex flex-col justify-start w-[40%]'>
            <span className={`${errorTypeNom===true? "text-errorDeux":"text-valide"}`} >- Ne contient que des lettres.</span>
            <span className={`${errorNbNom===true? "text-errorDeux":"text-valide"}`} >- 2 caractères minimum.</span>
          </div>
          <div className='flex flex-col justify-start w-[40%]' >
            <span className={`${errorTypePrenom===true? "text-errorDeux":"text-valide"}`} >- Ne contient que des lettres.</span>
            <span className={`${errorNbPrenom===true? "text-errorDeux":"text-valide"}`} >- 2 caractères minimum.</span>
          </div>
        </div>


        <DivLabelSignUp nbUn={2} nbDeux={3}/>
         <div className="w-full flex items-start justify-evenly">
        <input
          className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
          placeholder="exemple : $pider95"
          type="text"
          onChange={(e)=>{
            setpseudonyme(e.target.value);
            console.log(e.target.value.length)
            if(e.target.value.length>=2 && errorNbPseudo===true ){
                seterrorNbPseudo(false);
              }
            if(e.target.value.length<2 && errorNbPseudo===false){
              seterrorNbPseudo(true);
            }
          }}
          onClick={()=>seterrorMsg("")}
          id="Pseudonyme"
          value={pseudonyme}
        />
        <input
          className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
          placeholder="texte@exemple.com"
          type="text"
          onChange={(e)=>{
            setemail(e.target.value);
             if(regexMail(e.target.value)===true && errorTypeMail===true){
                seterrorTypeMail(false);
              }
              if(regexMail(e.target.value)===false && errorTypeMail === false){
                seterrorTypeMail(true);
              }
              if(e.target.value.length >=5 && errorNbMail===true){
                seterrorNbMail(false);
              }
              if(e.target.value.length< 5 && errorNbMail === false){
                seterrorNbMail(true);
              }
          }}
          onClick={()=>seterrorMsg("")}
          id="Mail"
          value={email}
        />
      </div>
       

      <div className="w-full flex items-start justify-evenly text-errorDeux">
        <div className='flex flex-col justify-start w-[40%]' >
          <span className={`${errorNbPseudo===true? "text-errorDeux":"text-valide"}`}  >- 2 caractères minimum.</span>
        </div>
        <div className='flex flex-col justify-start w-[40%]' >
          <span className={`${errorTypeMail===true? "text-errorDeux":"text-valide"}`} >- Doit être de type Mail.</span>
          <span className={`${errorNbMail===true? "text-errorDeux":"text-valide"}`} >- 5 caractères minimum.</span>
        </div>
      </div>
        <DivLabelSignUp nbUn={4} nbDeux={5}/>
        <div className="w-full flex items-start justify-evenly">
        <input
          className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
          placeholder="******"
          type="text"
          onChange={(e)=>{
            setpassword(e.target.value);
            test(e);
            if(e.target.value.length >=8 && errorNbMdp===true){
                seterrorNbMdp(false);
              }
            if(e.target.value.length< 8 && errorNbMdp === false){
                seterrorNbMdp(true);
            }
          }}
          onClick={()=>seterrorMsg("")}
          id="Mot de passe"
          value={password}
        />
        <input
          className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
          placeholder="******"
          type="text"
          onChange={(e)=>{
            setconfirmMdp(e.target.value);
            if(password === e.target.value && e.target.value.length>1 ){
              seterrorConfirmMdp(false);
            }
            if(password !== e.target.value){
              seterrorConfirmMdp(true);
            }
          }}
          onClick={()=>seterrorMsg("")}
          id="Confirmation"
          value={confirmMdp}
        />
      </div>
       

        <div className="w-full flex items-start justify-evenly text-errorDeux">
          <div className='flex flex-col justify-start w-[40%] ' >
            <p className={`w-full ${couleurSecuriteMdp()} text-vertFoncer text-center py-[5px] rounded-lg mb-[10px]`} >{errorTypeMdp}</p>
            <span className={`${errorNbMdp===true? "text-errorDeux":"text-valide"}`} >- 8 caractères minimum.</span>
          </div>
          <div className='flex flex-col justify-start w-[40%]' >
            <span className={`${errorConfirmMdp===true? "text-errorDeux":"text-valide"}`} >- Identique au mot de passe.</span>
          </div>
        </div>
    </>
  )
}

import regexMajusculeMdp from "../regex/RegexMajusculeMdp";
import regexMinusculeMdp from "../regex/RegexMinuscukeMdp";
import regexCaractereSpecialMdp from "../regex/RegexCaractereSpecialMdp";
import regexChiffreMdp from "../regex/RegexChiffreMdp";

export default function valideTypeMdp(e,errTypeSignUp,seterrTypeSignUp){

    if(errTypeSignUp.mdp !== "Sécurité faible"){
        if(e.target.value.length < 8){
            return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité faible"})
        }
        if(regexMinusculeMdp(e.target.value)){
            if((regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value))){
            return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité faible"})
            }
        }
        if(regexMajusculeMdp(e.target.value)){
            if((regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
            return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité faible"})
            }
        }
        if(regexChiffreMdp(e.target.value)){
            if((regexCaractereSpecialMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
            return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité faible"})
            }
        }
        if(regexCaractereSpecialMdp(e.target.value)){
            if((regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(!regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
            return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité faible"})
            }
        }
        if(!regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value)){
            return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité faible"})
        }
    }
    if((errTypeSignUp.mdp !== "Sécurité moyenne")&&(e.target.value.length>=8 )){
        if(regexMinusculeMdp(e.target.value)){
            if((regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value))||(regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value))){
            return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité moyenne"})
            }
        }
        if(regexMajusculeMdp(e.target.value)){
            if((regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(regexCaractereSpecialMdp(e.target.value) && !regexChiffreMdp(e.target.value) && regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
            return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité moyenne"})
            }
        }
        if(regexChiffreMdp(e.target.value)){
            if((regexCaractereSpecialMdp(e.target.value) && regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(regexCaractereSpecialMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))||(!regexCaractereSpecialMdp(e.target.value) && regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
            return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité moyenne"})
            }
        }
        if(regexCaractereSpecialMdp(e.target.value)){
            if((regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value) && !regexMinusculeMdp(e.target.value))||(regexChiffreMdp(e.target.value) && !regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))||(!regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value) && regexMinusculeMdp(e.target.value))){
            return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité moyenne"})
            }
        }
    }
    if((errTypeSignUp.mdp !== "Sécurité moyenne")&&(e.target.value.length>=8 && e.target.value.length<10 )){
    if(regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value)){
        return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité moyenne"})
    }
    }
    if(errTypeSignUp.mdp !== "Sécurité forte" && e.target.value.length>=10){
    if(regexCaractereSpecialMdp(e.target.value) && regexChiffreMdp(e.target.value) && regexMajusculeMdp(e.target.value)){
        return seterrTypeSignUp({...errTypeSignUp,mdp:"Sécurité forte"})
    }
    }
}
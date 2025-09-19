import regexNom from "../regex/RegexNom"

export default function validePrenom(e,errTypeSignUp,seterrTypeSignUp,errNbSignUp,seterrNbSignUp){
    if(regexNom(e.target.value)===true && errTypeSignUp.prenom===true){
        seterrTypeSignUp({...errTypeSignUp,prenom:false})
    }
    if(regexNom(e.target.value)===false && errTypeSignUp.prenom===false){
        seterrTypeSignUp({...errTypeSignUp,prenom:true})
    }
    if(e.target.value.length >=2 && errNbSignUp.prenom===true){
        seterrNbSignUp({...errNbSignUp,prenom:false})
    }
    if(e.target.value.length< 2 && errNbSignUp.prenom === false){
        seterrNbSignUp({...errNbSignUp,prenom:true})
    }
}
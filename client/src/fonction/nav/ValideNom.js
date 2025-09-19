import regexNom from "../regex/RegexNom"

export default function valideNom(e,errTypeSignUp,seterrTypeSignUp,errNbSignUp,seterrNbSignUp){
    if(regexNom(e.target.value)===true && errTypeSignUp.nom===true){
        seterrTypeSignUp({...errTypeSignUp,nom:false})
    }
    if(regexNom(e.target.value)===false && errTypeSignUp.nom === false){
    seterrTypeSignUp({...errTypeSignUp,nom:true})
    }
    if(e.target.value.length >=2 && errNbSignUp.nom===true){
    seterrNbSignUp({...errNbSignUp,nom:false})
    }
    if(e.target.value.length< 2 && errNbSignUp.nom === false){
    seterrNbSignUp({...errNbSignUp,nom:true})
    }
}
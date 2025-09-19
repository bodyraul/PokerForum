import regexMail from "../regex/RegexMail"

export default function valideMail(e,errTypeSignUp,seterrTypeSignUp,errNbSignUp,seterrNbSignUp){
    if(regexMail(e.target.value)===true && errTypeSignUp.mail===true){
        seterrTypeSignUp({...errTypeSignUp,mail:false})
    }
    if(regexMail(e.target.value)===false && errTypeSignUp.mail === false){
        seterrTypeSignUp({...errTypeSignUp,mail:true})
    }
    if(e.target.value.length >=5 && errNbSignUp.mail===true){
        seterrNbSignUp({...errNbSignUp,mail:false})
    }
    if(e.target.value.length< 5 && errNbSignUp.mail === false){
        seterrNbSignUp({...errNbSignUp,mail:true})
    }
}
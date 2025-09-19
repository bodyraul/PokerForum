export default function validePseudo (e,errNbSignUp,seterrNbSignUp){
    if(e.target.value.length>=2 && errNbSignUp.pseudo===true ){
        seterrNbSignUp({...errNbSignUp,pseudo:false})
    }
    if(e.target.value.length<2 && errNbSignUp.pseudo===false){
    seterrNbSignUp({...errNbSignUp,pseudo:true})
    }
}
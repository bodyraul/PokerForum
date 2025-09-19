export default function valideNbMdp(e,errNbSignUp,seterrNbSignUp){
    if(e.target.value.length >=8 && errNbSignUp.mdp===true){
        seterrNbSignUp({...errNbSignUp,mdp:false})
    }
    if(e.target.value.length< 8 && errNbSignUp.mdp === false){
        seterrNbSignUp({...errNbSignUp,mdp:true})
    }
}
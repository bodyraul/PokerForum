export default function activeBtnCreer(errTypeSignUp,errNbSignUp,btnref){
    if(!errTypeSignUp.nom && !errNbSignUp.nom && !errTypeSignUp.prenom && !errNbSignUp.prenom && !errNbSignUp.pseudo && !errTypeSignUp.mail && !errNbSignUp.mail && !errNbSignUp.mdp && !errTypeSignUp.confirmMdp){
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
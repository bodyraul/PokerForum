
export default function gestionErrorConnexion(password,email,seterrMsgNav,errMsgNav){
    let error=true;
    if(email===""){
        seterrMsgNav({
            ...errMsgNav,signIn:"L'email ne peut pas être vide",
        });
        return error;
    }
    if(password===""){
        seterrMsgNav({
            ...errMsgNav,signIn:"Le password ne peut pas être vide",
        })
        return error;
    }
    error=false;
    return error;
}
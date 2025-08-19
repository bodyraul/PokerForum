
export default function gestionErrorConnexion(password,email,seterrorMsg){
    let error=true;
    if(email===""){
        seterrorMsg("L'email ne peut pas être vide");
        return error;
    }
    if(password===""){
        seterrorMsg("Le password ne peut pas être vide");
        return error;
    }
    error=false;
    return error;
}
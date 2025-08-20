import regexNom from "../regex/RegexNom";
import regexMail from "../regex/RegexMail";
import regexPassword from "../regex/RegexPassword";
export default function gestionErrorInscription(nom,prenom,pseudonyme,email,password,confirmMdp,seterrorMsg){
    
    let error=true;
    if(nom===""||prenom===""||pseudonyme===""||email===""||password===""||confirmMdp===""){
        seterrorMsg("Tous les champs doivent être remplis.")
        return error;
    }
    if(regexNom(nom)===false){
        seterrorMsg("Nom invalide.");
        return error;
    }
    if(regexNom(prenom)===false){
        seterrorMsg("Prénom invalide.");
        return error;
    }
    if(regexMail(email)===false){
        seterrorMsg("Email Invalide.");
        return error;
    }
    if(regexPassword(password)===false){
        seterrorMsg("Le password doit contenir 8 caractères minimum, une majuscule, une minuscule, un chiffre et un caractère spécial.");
        return error;
    }
    if(confirmMdp!==password){
        seterrorMsg("La confirmation doit correspondre au Pasword.");
        return error;
    }
    
    error= false;
    return error;
}
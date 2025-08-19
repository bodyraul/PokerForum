

export default function gestionErrorMessageMsg (paraMessageErreur,token,setmessageErreur,valueMsgForm){
    let error = true;
    paraMessageErreur.current.style.color = "#ef4444";
    if (!token) {
       setmessageErreur("Vous devez être connecté pour écrire un message.");
        return error;
    }
    if (valueMsgForm.length === 0) {
       setmessageErreur("le message ne peut pas être vide");
       return error;
    }
    if (valueMsgForm.length > 600) {
      setmessageErreur("le message ne peut pas dépasser 600 caractères");
      return error;
    }
    error=false;
    return error;
}
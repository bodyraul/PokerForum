export default function GestionErrorMessagePost(token,radioValue,errorMsgPost,seterrorMsgCreerPost,valueTitrePost){
    errorMsgPost.current.style.color = "#ef4444";
    let error = true;
    if (!token) {
       seterrorMsgCreerPost(
        "Vous devez être connecté pour pouvoir créer un post."
      );
      return error=true;
    }
    if (!radioValue) {
       seterrorMsgCreerPost("Vous devez choisir une catégorie.");
         return error;
    }
    if (valueTitrePost.length === 0) {
       seterrorMsgCreerPost("le titre ne doit pas être vide.");
        return error;
    }
    if (valueTitrePost.length < 10) {
       seterrorMsgCreerPost(
        "le titre ne peux pas contenir moins de 10 caractères."
      );
       return error;
    }
    if (valueTitrePost.length > 300) {
       seterrorMsgCreerPost(
        "le titre ne peux pas contenir plus de 300 caractères."
      );
       return error;
    }
    error=false;
    return error;
}
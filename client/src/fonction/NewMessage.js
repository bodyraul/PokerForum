import axios from "axios";

export default function NewMessage (token,setmessageErreur,valueMsgForm,id,config,paraMessageErreur,setMessage,setvalueMsgForm,message,setcurrentPage)  {
    paraMessageErreur.current.style.color = "#ef4444";
    if (!token) {
      return setmessageErreur(
        "Vous devez être connecté pour écrire un message."
      );
    }
    if (valueMsgForm.length === 0) {
      return setmessageErreur("le message ne peut pas être vide");
    }
    if (valueMsgForm.length > 400) {
      return setmessageErreur("le message ne peut pas dépasser 400 caractères");
    }
    
    const newMessage = {};
    newMessage.contenu = valueMsgForm;

     axios
      .post(`http://localhost:5000/message/creerMessage/${id}`, newMessage, config)
      .then((res) => {
        paraMessageErreur.current.style.color = "#44ADA8";
        setMessage([res.data,...message]);
        setmessageErreur("message Créé.");
        setcurrentPage(1);
        setvalueMsgForm("");
      })
      .catch((err) => console.log(err));
  };
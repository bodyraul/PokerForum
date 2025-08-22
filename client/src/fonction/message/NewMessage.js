import axios from "axios";
import gestionErrorMessageMsg from "../gestionError/GestionErrorMessageMsg";

export default function NewMessage (token,setmessageErreur,valueMsgForm,id,config,paraMessageErreur,setMessage,setvalueMsgForm,message,setcurrentPage)  {
    
  const error=gestionErrorMessageMsg(paraMessageErreur,token,setmessageErreur,valueMsgForm);

    if(error===false){
        const newMessage = {};
        newMessage.contenu = valueMsgForm;
        axios
          .post(`/message/creerMessage/${id}`, newMessage, config)
          .then((res) => {
            paraMessageErreur.current.style.color = "#44ADA8";
            setMessage([res.data,...message]);
            setmessageErreur("message Créé.");
            setcurrentPage(1);
            setvalueMsgForm("");
          })
          .catch((err) => console.log(err));
        }
  };
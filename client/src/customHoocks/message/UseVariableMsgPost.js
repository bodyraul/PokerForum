import { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Configuration from "../../fonction/globale/Configuration";
import AuthContext from "../../Context/AuthContext";

export default function UseVariableMsgPost(){
    const [currentPage, setcurrentPage] = useState(1);
    const titrecontenu = useRef();
    const { id } = useParams();
    const [valueMsgForm, setvalueMsgForm] = useState("");
    const { token } = useContext(AuthContext);
    const [messageErreur, setmessageErreur] = useState("");
    const paraMessageErreur = useRef();
    const config = Configuration(token);
    return{currentPage,setcurrentPage,token,titrecontenu,id,valueMsgForm,
    setvalueMsgForm,messageErreur,setmessageErreur,paraMessageErreur,config}
}
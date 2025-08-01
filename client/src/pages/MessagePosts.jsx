import React,{useState,useRef,useContext} from 'react'
import { useParams } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import AfficherPost from '../components/AfficherPost';
import AfficheMessage from '../components/AfficheMessage';
import CreerMessage from '../components/CreerMessage';
import UseMessagePost from '../customHoocks/UseMessagePost';
import NewMessage from '../fonction/NewMessage';
import Configuration from '../fonction/Configuration';

export default function MessagePosts() {
  const titrecontenu = useRef();
  const { id } = useParams();
  const [valueMsgForm, setvalueMsgForm] = useState("");
  const { token } = useContext(AuthContext);
  const [messageErreur, setmessageErreur] = useState("");
  const paraMessageErreur = useRef();

  const config = Configuration(token);
  const {post,message,setMessage}= UseMessagePost(config,id);

  return (
    <div className="sup990:mt-48 w-[95%]  mt-10">
      <p className="sup670:text-4xl text-center text-2xl text-vertFoncer mt-12 pb-[50px] ">
        {" "}
        Post selectionné
      </p>
      <AfficherPost listePost={post}/>
      <AfficheMessage message={message} titrecontenu={titrecontenu} />
      <CreerMessage valueMsgForm={valueMsgForm} setvalueMsgForm={setvalueMsgForm}  paraMessageErreur={paraMessageErreur} setmessageErreur={setmessageErreur} 
      messageErreur={messageErreur} valideFormMessage={()=>NewMessage(token,setmessageErreur,valueMsgForm,id,config,paraMessageErreur,setMessage,setvalueMsgForm,message)} />
    </div>
  )
}

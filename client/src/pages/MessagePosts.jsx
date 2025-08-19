import React,{useState,useRef,useContext} from 'react'
import { useParams } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import AfficheMessage from '../components/pageMsgPost/afficheMessage/AfficheMessage';
import CreerMessage from '../components/pageMsgPost/creerMessage/CreerMessage';
import UseMessagePost from '../customHoocks/UseMessagePost';
import NewMessage from '../fonction/NewMessage';
import Configuration from '../fonction/Configuration';
import AfficheLePost from '../components/pageMsgPost/afficherPost/afficheLePost';
import PageMsgContext from '../Context/PageMsgContext';

export default function MessagePosts() {
  const [currentPage, setcurrentPage] = useState(1);
  const titrecontenu = useRef();
  const { id } = useParams();
  const [valueMsgForm, setvalueMsgForm] = useState("");
  const { token } = useContext(AuthContext);
  const [messageErreur, setmessageErreur] = useState("");
  const paraMessageErreur = useRef();
  const config = Configuration(token);
  const {post,message,setMessage}= UseMessagePost(config,id);

  return (
    <PageMsgContext.Provider value={{currentPage,setcurrentPage}}>
      <div className="mt-48 w-[100%]  ">
        <p className="scrollMsg sup670:text-4xl text-center text-2xl text-vertFoncer mt-[48px] pb-[90px] ">
          {" "}
          Post selectionné
        </p>
        <AfficheLePost listePost={post}/>
        <AfficheMessage message={message} titrecontenu={titrecontenu} />
        <CreerMessage valueMsgForm={valueMsgForm} setvalueMsgForm={setvalueMsgForm}  paraMessageErreur={paraMessageErreur} setmessageErreur={setmessageErreur} 
        messageErreur={messageErreur} valideFormMessage={()=>NewMessage(token,setmessageErreur,valueMsgForm,id,config,paraMessageErreur,setMessage,setvalueMsgForm,message,setcurrentPage)} />
      </div>
    </PageMsgContext.Provider>
  )
}

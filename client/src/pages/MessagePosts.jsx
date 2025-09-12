import React from 'react'
import AfficheMessage from '../components/pageMsgPost/afficheMessage/AfficheMessage';
import CreerMessage from '../components/pageMsgPost/creerMessage/CreerMessage';
import UseMessagePost from '../customHoocks/message/UseMessagePost';
import NewMessage from '../fonction/message/NewMessage';
import AfficheLePost from '../components/pageMsgPost/afficherPost/afficheLePost';
import PageMsgContext from '../Context/PageMsgContext';
import UseVariableMsgPost from '../customHoocks/message/UseVariableMsgPost';
import Spinner from '../componentsResutilisable/globale/Spinner';
import BtnAccesCreerMsg from '../components/pageMsgPost/Btn/BtnAccesCreerMsg';
import BtnRetourMsg from '../components/pageMsgPost/Btn/BtnRetourMsg';

export default function MessagePosts() {

  const {currentPage,setcurrentPage,token,titrecontenu,id,valueMsgForm,setvalueMsgForm,messageErreur
    ,setmessageErreur,paraMessageErreur,config,spin} = UseVariableMsgPost();

  const {post,message,setMessage}= UseMessagePost(config,id);

  return (
    <PageMsgContext.Provider value={{currentPage,setcurrentPage}}>
      {
        spin ? 
        <Spinner/>
          :
        <div className="sup480:pt-[110px] sup768:pt-[150px] sup1024:pt-[170px] sup1600:pt-[190px] pt-[90px] w-[100%] max-w-[1800px] mx-auto my-0 ">
          <AfficheLePost listePost={post}/>
          <BtnAccesCreerMsg/>
          <AfficheMessage message={message} titrecontenu={titrecontenu} />
          <BtnRetourMsg message={message} />
          <CreerMessage valueMsgForm={valueMsgForm} setvalueMsgForm={setvalueMsgForm}  paraMessageErreur={paraMessageErreur} setmessageErreur={setmessageErreur} 
          messageErreur={messageErreur} valideFormMessage={()=>NewMessage(token,setmessageErreur,valueMsgForm,id,config,paraMessageErreur,setMessage,setvalueMsgForm,message,setcurrentPage)} />
        </div>
      }
    </PageMsgContext.Provider>
  )
}

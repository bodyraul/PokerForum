import React from 'react'
import AfficheMessage from '../components/pageMsgPost/afficheMessage/AfficheMessage';
import CreerMessage from '../components/pageMsgPost/creerMessage/CreerMessage';
import UseMessagePost from '../customHoocks/message/UseMessagePost';
import NewMessage from '../fonction/message/NewMessage';
import AfficheLePost from '../components/pageMsgPost/afficherPost/afficheLePost';
import PageMsgContext from '../Context/PageMsgContext';
import UseVariableMsgPost from '../customHoocks/message/UseVariableMsgPost';


export default function MessagePosts() {

  const {currentPage,setcurrentPage,token,titrecontenu,id,valueMsgForm,setvalueMsgForm,messageErreur
    ,setmessageErreur,paraMessageErreur,config} = UseVariableMsgPost();

  const {post,message,setMessage}= UseMessagePost(config,id);

  return (
    <PageMsgContext.Provider value={{currentPage,setcurrentPage}}>
      <div className="sup480:pt-[110px] sup768:pt-[150px] sup1024:pt-[170px] sup1600:pt-[190px] pt-[90px] w-[100%] max-w-[1800px]  ">
        <p className=" sup480:pb-[60px] sup480:text-[25px] sup768:pb-[90px] sup768:text-[31px] sup1024:pb-[100px] sup1024:text-[42px] sup1600:pb-[120px] sup1600:text-[48px] pb-[45px] text-[20px] text-center  text-vertFoncer max-w-[1800px]">
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

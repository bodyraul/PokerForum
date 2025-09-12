import React from 'react'
import AfficheMessage from '../components/pageMsgPost/afficheMessage/AfficheMessage';
import CreerMessage from '../components/pageMsgPost/creerMessage/CreerMessage';
import UseMessagePost from '../customHoocks/message/UseMessagePost';
import NewMessage from '../fonction/message/NewMessage';
import AfficheLePost from '../components/pageMsgPost/afficherPost/afficheLePost';
import PageMsgContext from '../Context/PageMsgContext';
import UseVariableMsgPost from '../customHoocks/message/UseVariableMsgPost';
import Spinner from '../componentsResutilisable/globale/Spinner';

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
          <p className=" sup480:pb-[60px] sup480:text-[25px] sup768:pb-[90px] sup768:text-[31px] sup1024:pb-[100px] sup1024:text-[42px] sup1600:pb-[120px] sup1600:text-[48px] pb-[45px] text-[20px] text-center  text-vertFoncer max-w-[1800px]">
            {" "}
            Post selectionné
          </p>
          <AfficheLePost listePost={post}/>
          <div className='sup480:mb-[50px] sup768:mb-[70px] sup1024:mb-[90px] sup1600:mb-[110px] mb-[30px] w-full flex justify-center'>
              <button onClick={()=>{
                document.querySelector(".newMessage").scrollIntoView({ behavior: 'smooth'});
              }} 
              className={`sup480:text-[13px] sup768:text-[14px] sup768:px-[10px] sup768:py-[6px] sup1024:text-[13px] sup1600:text-[19px] sup1600:px-[12px] py-[5px] px-[8px] border-solid text-vertFoncer border border-vertFoncer rounded-lg text-[10px] transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer`}>
                Nouveau Message
              </button>
          </div>
          <AfficheMessage message={message} titrecontenu={titrecontenu} />
          <div className='sup480:mb-[50px] sup768:mb-[70px] sup1024:mb-[90px] sup1600:mb-[110px] mb-[30px] w-full flex justify-center'>
              <button onClick={()=>{
                document.querySelector(".allMsgs").scrollIntoView({ behavior: 'smooth'});
              }} 
              className={`sup480:text-[13px] sup768:text-[14px] sup768:px-[10px] sup768:py-[6px] sup1024:text-[13px] sup1600:text-[19px] sup1600:px-[12px] py-[5px] px-[8px] border-solid text-vertFoncer border border-vertFoncer rounded-lg text-[10px] transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer`}>
                Retour aux messages
              </button>
          </div>
          <CreerMessage valueMsgForm={valueMsgForm} setvalueMsgForm={setvalueMsgForm}  paraMessageErreur={paraMessageErreur} setmessageErreur={setmessageErreur} 
          messageErreur={messageErreur} valideFormMessage={()=>NewMessage(token,setmessageErreur,valueMsgForm,id,config,paraMessageErreur,setMessage,setvalueMsgForm,message,setcurrentPage)} />
        </div>
      }
    </PageMsgContext.Provider>
  )
}

import React from 'react'
import InfoMessage from '../../../componentsResutilisable/message/InfoMessage';
import { useState } from 'react';
import Pagination from '../../../componentsResutilisable/globale/Pagination';
import PageMsgContext from '../../../Context/PageMsgContext';
import { useContext } from 'react';

export default function AfficheMessage({message,titrecontenu}) {
  const {currentPage,setcurrentPage}=useContext(PageMsgContext);
  const [postPerPage, setpostPerPage] = useState(3);
  const indexOfLastPost =currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost-postPerPage;
  const currentPosts = message.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber)=>setcurrentPage(pageNumber);
  return (
    <div className="sup480:w-[350px] sup768:w-[500px] sup1024:w-[650px] sup1600:w-[750px] w-[80%] mx-auto mt-[48px] ">
        {currentPosts.map((element) => {
          return (
            <div key={element._id} className="sup480:mb-[32px] sup768:mb-[38px] sup768:p-[15px] sup1024:p-[20px] sup1024:mb-[45px] sup1600:mb-[55px] sup1600:p-[25px] mb-[28px] p-[10px] border-solid border-[2px] border-gris w-full ">
              <div className="sup480:pb-[25px] sup768:pb-[38px] sup1024:pb-[50px] pb-[20px] text-vertClair font-bold flex items-center justify-between bg-blanc">
                <div className=" flex items-center justify-between">
                  <InfoMessage>
                    {" " + element.pseudoCreateurMessage}
                  </InfoMessage>
                </div>
                <InfoMessage>
                    {element.dateCreation}
                </InfoMessage>
              </div>
              <p className="sup480:text-[12px] sup480:min-h-[25px] sup480:max-h-[60px] sup480:leading-[18px] sup768:leading-[21px] sup768:max-h-[70px] sup768:min-h-[30px] sup768:pt-[4px] sup768:text-[14px] sup1024:leading-[27px] sup1024:max-h-[87px] sup1024:min-h-[33px] sup1024:text-[15px]  sup1600:text-[16px] sup1600:leading-[30px] sup1600:max-h-[97px] sup1600:min-h-[41px] pt-[2px] px-[10px] VisibleContenu block relative overflow-hidden overflow-y-scroll w-full  text-vertFoncer text-[10px] min-h-[20px] max-h-[50px]  bg-grisFonce  " ref={titrecontenu}>
                {element.contenu}
              </p>
            </div>
          );
        })}
        <Pagination postsPerPage={postPerPage} totalPosts={message.length} paginate={paginate} currentpage={currentPage} />
      </div>
  )
}

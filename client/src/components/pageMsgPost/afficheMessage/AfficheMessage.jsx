import React from 'react'
import Pagination from '../../../componentsResutilisable/globale/Pagination';
import ListeMsgVide from './ListeMsgVide';
import UseNbPageMsg from '../../../customHoocks/message/UseNbPageMsg';
import TopListMsg from './TopListMsg';
import BottomListMsg from './BottomListMsg';


export default function AfficheMessage({message,titrecontenu}) {
  const {currentPage,postPerPage,currentPosts,paginate}=UseNbPageMsg(message);
  if(message.length===0){
    return(
      <ListeMsgVide/>
    )
  }
  if(message.length>0){
    return(
      <div className="sup480:w-[350px] sup768:w-[500px] sup1024:w-[650px] sup1600:w-[750px] w-[80%] mx-auto">
        {currentPosts.map((element) => {
          return (
            <div key={element._id} className="sup480:mb-[32px] sup768:mb-[38px] sup768:p-[15px] sup1024:p-[20px] sup1024:mb-[45px] sup1600:mb-[55px] sup1600:p-[25px] mb-[28px] p-[10px] border-solid border-[2px] border-gris w-full ">
                <TopListMsg element={element} />
                <BottomListMsg element={element} titrecontenu={titrecontenu} />
            </div>
          );
        })}
        <Pagination postsPerPage={postPerPage} totalPosts={message.length} paginate={paginate} currentpage={currentPage} />
      </div>
    )
  }
}

import React from 'react'
import Pagination from '../../../componentsResutilisable/globale/Pagination';
import UseNbPageMsg from '../../../customHoocks/message/UseNbPageMsg';
import ContentMsg from './ContentMsg';

export default function AfficheMessage({message}) {
  const {currentPage,postPerPage,currentPosts,paginate}=UseNbPageMsg(message);
  
    return(
      <div className="sup480:w-[400px] sup480:h-[750px] sup768:w-[630px] sup768:h-[870px] sup1024:w-[750px] sup1024:h-[1020px] sup1600:w-[850px] sup1600:h-[1170px] w-[80%] mt-0  mx-auto max-w-[1800px] h-[630px] ">
        {currentPosts.map((element) => {
          return (
            <div key={element._id}>
                <ContentMsg element={element}/>
            </div>
          );
        })}
        <Pagination postsPerPage={postPerPage} totalPosts={message.length} paginate={paginate} currentpage={currentPage} />
      </div>
    )

}
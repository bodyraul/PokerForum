import React from 'react'
import ContentPost from './ContentPost';
import CategoriePost from './CategoriePost';
import Pagination from '../../../componentsResutilisable/globale/Pagination';
import UseNbPagePost from '../../../customHoocks/forum/UseNbPagePost';

export default function AfficherAllPost() {
  
  const {listePost,currentPage,postPerPage,currentPosts,paginate}=UseNbPagePost();

  return (
    <div className=" sup480:w-[450px] sup480:h-[750px] sup768:w-[700px] sup768:h-[870px] sup1024:w-[850px] sup1024:h-[1020px] sup1600:w-[1000px] sup1600:h-[1170px] w-full mt-0  mx-auto max-w-[1800px] h-[700px] ">
      {currentPosts.map((element) => {
          return (
              <div key={element._id}>
                  <CategoriePost/>
                  <ContentPost element={element}/>
              </div>
          );
        })}
        <Pagination postsPerPage={postPerPage} totalPosts={listePost.length} paginate={paginate} currentpage={currentPage} />
    </div>
  )
}


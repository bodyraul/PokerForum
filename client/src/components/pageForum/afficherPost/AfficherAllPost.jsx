import React from 'react'
import ContentPost from './ContentPost';
import CategoriePost from './CategoriePost';
import Pagination from '../../../componentsResutilisable/globale/Pagination';
import UseNbPagePost from '../../../customHoocks/forum/UseNbPagePost';

export default function AfficherAllPost() {
  
  const {listePost,currentPage,postPerPage,currentPosts,paginate}=UseNbPagePost();

  return (
    <div className="sup480:mb-[50px] sup480:w-[450px] sup768:mb-[70px] sup768:w-[700px] sup1024:w-[850px] sup1024:mb-[80px] sup1600:w-[1000px] sup1600:mb-[110px] w-full mt-0 mb-[30px] mx-auto max-w-[1800px] ">
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


import React from 'react'
import ContentPost from './ContentPost';
import CategoriePost from './CategoriePost';
import { useState } from 'react';
import Pagination from '../../../componentsResutilisable/globale/Pagination';
import { useContext } from 'react';
import PagePostContext from '../../../Context/PagePostContext';

export default function AfficherAllPost({listePost}) {

  const {currentPage,setcurrentPage}=useContext(PagePostContext);
  const [postPerPage, setpostPerPage] = useState(3);
  const indexOfLastPost =currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost-postPerPage;
  const currentPosts = listePost.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber)=>setcurrentPage(pageNumber);

  return (
    <div className=" sup480:w-[450px] sup768:w-[700px] sup1024:w-[850px] sup1600:w-[1000px] w-full mt-0 mb-24 mx-auto max-w-[1800px] ">
      {currentPosts.map((element) => {
          return (
              <div key={element._id}>
                  <CategoriePost/>
                  <ContentPost element={element} />
              </div>
          );
        })}
        <Pagination postsPerPage={postPerPage} totalPosts={listePost.length} paginate={paginate} currentpage={currentPage} />
    </div>
  )
}


import React from 'react'
import ContentPost from './ContentPost';
import CategoriePost from './CategoriePost';
import UseNbPagePost from '../../../customHoocks/forum/UseNbPagePost';
import Paginate from '../../../componentsResutilisable/globale/Paginate';

export default function AfficherAllPost() {
  
  const {currentPosts,currentPage,setcurrentPage,nbPage}=UseNbPagePost();

  return (
    <div className=" sup480:w-[450px] sup480:mb-[50px] sup768:w-[700px] sup768:mb-[70px] sup1024:w-[850px] sup1024:mb-[90px] sup1600:w-[1000px] sup1600:mb-[110px]  w-full mt-0  mx-auto max-w-[1800px] mb-[30px]  ">
      {currentPosts.map((element,index) => {
          return (
              <div key={element._id}>
                  <CategoriePost index={index}/>
                  <ContentPost element={element}/>
              </div>
          );
        })}
        {nbPage<=0? "" : <Paginate set={setcurrentPage} currentPage={currentPage} nbPage={nbPage} />}
    </div>
  )
}


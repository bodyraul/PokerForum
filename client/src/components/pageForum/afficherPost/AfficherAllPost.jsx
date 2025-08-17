import React from 'react'
import CategoriePost from './CategoriePost';
import ContentPost from './ContentPost';


export default function AfficherAllPost({listePost}) {


  return (
    <div className=" sup1024:w-[95%] w-full mt-0 mb-24 mx-auto max-w-[1800px] ">
      <CategoriePost/>
      <ContentPost listePost={listePost} />
    </div>
  )
}

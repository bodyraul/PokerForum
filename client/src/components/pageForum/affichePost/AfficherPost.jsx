import React from 'react'
import CategoriePost from './CategoriePost';
import ContentPost from './ContentPost';


export default function AfficherPost({listePost}) {


  return (
    <div className="sup990:w-11/12 sup1600:w-1400 w-full mt-0 mb-24 mx-auto   ">
      <CategoriePost/>
      <ContentPost listePost={listePost} />
    </div>
  )
}

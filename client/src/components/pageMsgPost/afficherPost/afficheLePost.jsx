import React from 'react'
import CategoriePostMsg from './CategoriePostMsg';
import ContentPostMsg from './ContentPostMsg';



export default function AfficheLePost({listePost}) {


  return (
    <div className=" sup480:w-[450px] sup768:w-[700px] sup1024:w-[850px] sup1600:w-[1000px] w-[90%] mt-0 mb-24 mx-auto max-w-[1800px] ">
      <CategoriePostMsg/>
      <ContentPostMsg listePost={listePost} />
    </div>
  )
}
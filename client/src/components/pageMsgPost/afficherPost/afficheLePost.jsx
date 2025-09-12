import React from 'react'
import CategoriePostMsg from './CategoriePostMsg';
import ContentPostMsg from './ContentPostMsg';



export default function AfficheLePost({listePost}) {


  return (
    <div className="allMsgs sup480:w-[450px] sup480:mb-[65px] sup768:mb-[80px] sup768:w-[700px] sup1024:mb-[90px] sup1024:w-[850px] sup1600:w-[1000px] sup1600:mb-[100px] w-[90%] mb-[50px] mt-0  mx-auto max-w-[1800px] ">
      <CategoriePostMsg/>
      <ContentPostMsg listePost={listePost} />
    </div>
  )
}
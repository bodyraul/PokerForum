import React from 'react'
import ContentPost from './ContentPost';


export default function AfficherAllPost({listePost}) {


  return (
    <div className=" sup480:w-[450px] sup768:w-[700px] sup1024:w-[850px] sup1600:w-[1000px] w-full mt-0 mb-24 mx-auto max-w-[1800px] ">
      <ContentPost listePost={listePost} />
    </div>
  )
}

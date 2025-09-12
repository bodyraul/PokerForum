import React from 'react'

export default function TitrePost({listePost}) {
  
  if(listePost.length <=0){
    return(
        <p className=" sup480:text-[25px] sup480:pb-[30px] sup768:text-[31px] sup768:pb-[40px] sup1024:text-[42px] sup1024:pb-[50px] sup1600:text-[48px] sup1600:pb-[60px] pb-[20px]  text-[20px] text-center text-vertFoncer ">
            Aucun Post
        </p>
    ) 
  }
  if(listePost.length ===1){
    return(
        <p className=" sup480:text-[25px] sup480:pb-[30px] sup768:text-[31px] sup768:pb-[40px] sup1024:text-[42px] sup1024:pb-[50px] sup1600:text-[48px] sup1600:pb-[60px] pb-[20px]  text-[20px] text-center text-vertFoncer ">
            {listePost.length} post
        </p>
    ) 
  }
  if(listePost.length >1){
    return(
        <p className=" sup480:text-[25px] sup480:pb-[30px] sup768:text-[31px] sup768:pb-[40px] sup1024:text-[42px] sup1024:pb-[50px] sup1600:text-[48px] sup1600:pb-[60px] pb-[20px]  text-[20px] text-center text-vertFoncer ">
            {listePost.length} posts
        </p>
    ) 
  }
}

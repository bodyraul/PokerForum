import React, { useState,useRef} from 'react'
import newPost from '../../../fonction/Newpost';
import RecherchePostMsg from './RecherchePostMsg';
import AuthContext from '../../../Context/AuthContext';
import { useContext } from 'react';
import CreerTitrePost from './CreerTitrePost';
import ChoiseCategoriePost from './ChoiseCategoriePost';
import ErorMsgPost from '../errorMsg.jsx/ErorMsgPost';
import ListePostContext from '../../../Context/ListePostContext';
import PagePostContext from '../../../Context/PagePostContext';


export default function CreerPost({categories,config} ) {
    const{setcurrentPage}=useContext(PagePostContext);
    const [valueTitrePost, setvalueTitrePost] = useState("");
    const [radioValue, setradioValue] = useState("");
    const errorMsgPost = useRef();
    const [errorMsgCreerPost, seterrorMsgCreerPost] = useState("");
    const {token} = useContext(AuthContext);
    const {listePost,setlistePost}=useContext(ListePostContext);

  return (
    <div className="sup1024:flex-row sup1024:items-start sup1024:justify-center sup1024:w-[95%]  w-full  mx-auto  flex flex-col items-center justify-center max-w-[1800px] ">
        <div className="creationPost sup480:py-[20px] sup768:py-[25px] sup1024:py-[30px] sup1024:w-[95%] sup1600:py-[35px]    py-[15px] px-[24px] w-full border-solid border-[2px] border-gris">
          <CreerTitrePost valueTitrePost={valueTitrePost} seterrorMsgCreerPost={seterrorMsgCreerPost} setvalueTitrePost={setvalueTitrePost} />
          <ChoiseCategoriePost categories={categories} setradioValue={setradioValue} />
          <ErorMsgPost errorMsgCreerPost={errorMsgCreerPost} errorMsgPost={errorMsgPost} />
          <button className="sup480:text-[11px] sup480:px-[14px] sup768:text-[13px] sup768:px-[16px] sup1024:text-[15px] sup1024:px-[18px] sup1600:text-[16px] sup1600:px-[20px] text-[10px] py-[8px] px-[12px] text-vertFoncer border-solid border border-vertFoncer bg-blanc rounded-md transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertFoncer hover:text-blanc"
              onClick={()=>newPost(errorMsgPost,token,seterrorMsgCreerPost,config,radioValue,
              valueTitrePost,setlistePost,listePost,setradioValue,setvalueTitrePost,setcurrentPage)}>
            Créer
          </button>
        </div>
        <RecherchePostMsg />
      </div>
  )
}

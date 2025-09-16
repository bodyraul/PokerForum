import React from 'react'
import ScrollToNewPost from '../../fonction/scrollTo/ScrollToNewPost';
import AfficheAllPost from '../../fonction/forum/AfficheAllPost';
import tabBtnPost from '../../tools/tab/TabBtnPost'
import { useContext } from 'react';
import ListePostContext from '../../Context/ListePostContext';
import PagePostContext from '../../Context/PagePostContext';
import SpinnerContext from '../../Context/SpinnerContext';
import TrieContext from '../../Context/TrieContext';

export default function BtnPost({nb}) {
  const {setcurrentPage}=useContext(PagePostContext);
  const {setlistePost}= useContext(ListePostContext);
  const{setSpin}=useContext(SpinnerContext);
  const {setcroissantCategorie,setcroissantAuteur,setcroissantDate,setcroissantReponse}=useContext(TrieContext);
  return (
    <button onClick={
      tabBtnPost.boolean[nb]===true?
      ()=>{AfficheAllPost(setlistePost,setSpin,setcroissantCategorie,setcroissantAuteur,setcroissantDate,setcroissantReponse); 
      setcurrentPage(1);
    }
    :
    ScrollToNewPost
    } 
      className={`sup480:text-[13px] sup768:text-[14px] sup768:px-[10px] sup768:py-[6px] sup1024:text-[13px] sup1600:text-[19px] sup1600:px-[12px] ${tabBtnPost.margin[nb]} py-[5px] px-[8px] border-solid text-vertFoncer border border-vertFoncer rounded-lg text-[10px] transition-all duration-300 ease-in-out hover:bg-vertFoncer hover:text-blanc hover:border-blanc hover:cursor-pointer`}>
        {tabBtnPost.text[nb]}
    </button>
  )
}

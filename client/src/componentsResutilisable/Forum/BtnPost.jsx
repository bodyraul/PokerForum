import React from 'react'
import ScrollToNewPost from '../../fonction/ScrollToNewPost'
import AfficheAllPost from '../../fonction/AfficheAllPost'
import tabBtnPost from '../../tools/tab/TabBtnPost'
import { useContext } from 'react';
import ListePostContext from '../../Context/ListePostContext';

export default function BtnPost({nb}) {
  const {setlistePost}= useContext(ListePostContext);
  return (
    <button onClick={tabBtnPost.boolean[nb]===true?()=>AfficheAllPost(setlistePost):ScrollToNewPost} className={`sup1256:px-4 sup1256:py-3 sup990:py-3 sup990:px-3 ${tabBtnPost.margin[nb]} sup670:text-base mr-4 ml-5 py-1 px-7 border-solid text-vertClair border border-vertClair rounded-lg text-xs transition-all duration-300 ease-in-out hover:bg-vertClair hover:text-blanc hover:border-blanc hover:cursor-pointer`}>
        {tabBtnPost.text[nb]}
    </button>
  )
}

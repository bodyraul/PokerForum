import React from 'react';
import RechercheParCategorie from '../components/pageForum/rechercheParCategorie/RechercheParCategorie';
import AfficherAllPost from '../components/pageForum/afficherPost/AfficherAllPost';
import CreerPost from '../components/pageForum/creerPost/CreerPost';
import UseLoadPost from '../customHoocks/UseLoadPost';
import UseLoadCategories from '../customHoocks/UseLoadCategories';
import ListePostContext from '../Context/ListePostContext';
import { useState } from 'react';
import PagePostContext from './../Context/PagePostContext';
import ErroMsgCategorie from '../components/pageForum/errorMsg.jsx/ErroMsgCategorie';

export default function Forum({config}) {
  
  const {listePost,setlistePost} = UseLoadPost();
  const categories = UseLoadCategories();
  const [currentPage, setcurrentPage] = useState(1);
  const [errorMsgCategorie, seterrorMsgCategorie] = useState("");
  
  return (
    <PagePostContext.Provider value={{currentPage,setcurrentPage}}>
      <ListePostContext.Provider value={{listePost,setlistePost}}>
        <div className="sup480:pt-[110px] sup768:pt-[140px] sup1024:pt-[175px] sup1600:pt-[200px] w-[95%] pt-[80px] pb-[20px] my-0 mx-auto ">
          <p className="titreUn sup480:text-[25px] sup768:text-[31px] sup1024:text-[42px] sup1600:text-[48px] text-[20px] text-center text-vertFoncer ">Forum</p>
          <RechercheParCategorie seterrorMsgCategorie={seterrorMsgCategorie} categories={categories} />
          <ErroMsgCategorie errorMsgCategorie={errorMsgCategorie} />
          <AfficherAllPost listePost={listePost}/>
          <CreerPost categories={categories} config={config}/>
        </div>
      </ListePostContext.Provider>
    </PagePostContext.Provider>  
  )
}
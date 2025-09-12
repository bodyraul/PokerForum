import React from 'react';
import RechercheParCategorie from '../components/pageForum/rechercheParCategorie/RechercheParCategorie';
import AfficherAllPost from '../components/pageForum/afficherPost/AfficherAllPost';
import CreerPost from '../components/pageForum/creerPost/CreerPost';
import UseLoadPost from '../customHoocks/forum/UseLoadPost';
import UseLoadCategories from '../customHoocks/forum/UseLoadCategories';
import ListePostContext from '../Context/ListePostContext';
import { useState,useContext } from 'react';
import PagePostContext from './../Context/PagePostContext';
import ErroMsgCategorie from '../components/pageForum/errorMsg/ErroMsgCategorie';
import CategorieContext from '../Context/CategorieContext';
import SpinnerContext from '../Context/SpinnerContext';
import Spinner from '../componentsResutilisable/globale/Spinner';

export default function Forum({config}) {
  
  const {listePost,setlistePost} = UseLoadPost();
  const categories = UseLoadCategories();
  const [currentPage, setcurrentPage] = useState(1);
  const [errorMsgCategorie, seterrorMsgCategorie] = useState("");
  const {spin}=useContext(SpinnerContext);
  
  return (
      <CategorieContext.Provider value={{categories,seterrorMsgCategorie,errorMsgCategorie}}>
      <PagePostContext.Provider value={{currentPage,setcurrentPage}}>
      <ListePostContext.Provider value={{listePost,setlistePost}}>
        {
          spin ? 
            <Spinner/>
          :
            <div className="sup480:pt-[110px] sup768:pt-[140px] sup1024:pt-[175px] sup1600:pt-[200px] w-[95%] pt-[80px] pb-[20px] my-0 mx-auto ">
              <p className="titreUn sup480:text-[25px] sup768:text-[31px] sup1024:text-[42px] sup1600:text-[48px] text-[20px] text-center text-vertFoncer ">Forum</p>
              <RechercheParCategorie/>
              <ErroMsgCategorie/>
              <AfficherAllPost/>
              <CreerPost config={config}/>
            </div>
        }
      </ListePostContext.Provider>
      </PagePostContext.Provider>  
      </CategorieContext.Provider>
  )
}
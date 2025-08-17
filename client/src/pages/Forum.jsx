import React from 'react';
import RechercheParCategorie from '../components/pageForum/rechercheParCategorie/RechercheParCategorie';
import AfficherAllPost from '../componentsResutilisable/globale/AfficherAllPost';
import CreerPost from '../components/pageForum/creerPost/CreerPost';
import UseLoadPost from '../customHoocks/UseLoadPost';
import UseLoadCategories from '../customHoocks/UseLoadCategories';
import ListePostContext from '../Context/ListePostContext';

export default function Forum({config}) {
  
  const {listePost,setlistePost} = UseLoadPost();
  const categories = UseLoadCategories();
  
  return (
      <ListePostContext.Provider value={{listePost,setlistePost}}>
        <div className="w-[95%] pt-[176px] pb-[50px] my-0 mx-auto ">
          <p className="titreUn  text-center text-5xl text-vertFoncer ">Forum</p>
          <RechercheParCategorie  categories={categories} />
          <p className="sup990:text-xl flex items-center justify-center w-full my-0 mx-auto text-error text-sm h-12 ">
            {" "}
            {" "}
          </p>
          <AfficherAllPost listePost={listePost}/>
          <CreerPost categories={categories} config={config}/>
        </div>
      </ListePostContext.Provider>
  )
}
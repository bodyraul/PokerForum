import React from 'react';
import RechercheParCategorie from '../components/RechercheParCategorie';
import AfficherPost from '../components/AfficherPost';
import CreerPost from '../components/CreerPost';
import UseLoadPost from '../customHoocks/UseLoadPost';
import UseLoadCategories from '../customHoocks/UseLoadCategories';

export default function Forum({config}) {
  
  const {listePost,setlistePost} = UseLoadPost();
  const categories = UseLoadCategories();
  
  

  return (
    <div className="sup990:pt-44 w-[95%] pt-10 pb-[50px] my-0 mx-auto ">
      <p className="sup990:text-5xl text-center text-3xl text-vertFoncer">Forum</p>
      <RechercheParCategorie setlistePost={setlistePost} categories={categories} />
      <p className="sup990:text-xl flex items-center justify-center w-full my-0 mx-auto text-error text-sm h-12 ">
        {" "}
        {" "}
      </p>
      <AfficherPost listePost={listePost}/>
      <CreerPost categories={categories} setlistePost={setlistePost} listePost={listePost} config={config}/>
    </div>
  )
}

import React, { useEffect,useState } from 'react'
import axios from 'axios';
import RechercheParCategorie from '../components/RechercheParCategorie';
import AfficherPost from '../components/AfficherPost';
import CreerPost from '../components/CreerPost';

export default function Forum({config}) {
  
  const [listePost, setlistePost] = useState([]);
  const [categories, setcategories] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:5000/post")
    .then((res)=>setlistePost(res.data))
    .catch((err)=>console.log(err))

    axios.get("http://localhost:5000/categorie/afficherAllCategories")
    .then((res) => setcategories(res.data))
    .catch((err) => console.log(err));
  }, [])
  

  return (
    <div className="sup990:pt-44 w-[95%] pt-10 pb-[50px] my-0 mx-auto ">
      <p className="sup990:text-5xl text-center text-3xl text-vertFoncer">Forum</p>
      <RechercheParCategorie setlistePost={setlistePost} />
      <p className="sup990:text-xl flex items-center justify-center w-full my-0 mx-auto text-error text-sm h-12 ">
        {" "}
        {" "}
      </p>
      <AfficherPost listePost={listePost}/>
      <CreerPost categories={categories} setlistePost={setlistePost} listePost={listePost} config={config}/>
    </div>
  )
}

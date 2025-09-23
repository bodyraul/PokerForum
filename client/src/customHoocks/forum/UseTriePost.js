import React from 'react'
import { useContext } from 'react'
import TrieContext from '../../Context/TrieContext'
import ListePostContext from '../../Context/ListePostContext';

export default function UseTriePost() {
   const {croissantCategorie,setcroissantCategorie,croissantReponse,setcroissantReponse,
  croissantAuteur,setcroissantAuteur,croissantDate,setcroissantDate}=useContext(TrieContext);
  const {setlistePost,listePost}= useContext(ListePostContext);

  const trieCategorie =()=>{
    if(croissantCategorie===false){
      const trie = [...listePost]
      trie.sort((a, b) => a.categorie.localeCompare(b.categorie));
      setlistePost([...trie]);
      setcroissantCategorie(true);
      setcroissantReponse(false);
      setcroissantAuteur(false);
      setcroissantDate(false);
    }
    if(croissantCategorie===true){
      const trie = [...listePost]
      trie.sort((a, b) => b.categorie.localeCompare(a.categorie));
      setlistePost([...trie]);
      setcroissantCategorie(false);
      setcroissantReponse(false);
      setcroissantAuteur(false);
      setcroissantDate(false);
    }
  }

  const trieReponse =()=>{
    if(croissantReponse===false){
      const trie = [...listePost]
      trie.sort((a, b) => a.nombreMessages- b.nombreMessages);
      setlistePost([...trie]);
      setcroissantReponse(true);
      setcroissantCategorie(false);
      setcroissantDate(false);
      setcroissantAuteur(false);
    }
    if(croissantReponse===true){
      const trie = [...listePost]
      trie.sort((a, b) => b.nombreMessages- a.nombreMessages);
      setlistePost([...trie]);
      setcroissantReponse(false);
      setcroissantCategorie(false);
      setcroissantDate(false);
      setcroissantAuteur(false);
    }
  }

  const triePseudo=()=>{
    if(croissantAuteur===false){
      const trie = [...listePost]
      trie.sort((a, b) => a.pseudoCreateur.localeCompare(b.pseudoCreateur));
      setlistePost([...trie]);
      setcroissantAuteur(true);
      setcroissantCategorie(false);
      setcroissantDate(false);
      setcroissantReponse(false);
    }
    if(croissantAuteur===true){
      const trie = [...listePost]
      trie.sort((a, b) => b.pseudoCreateur.localeCompare(a.pseudoCreateur));
      setlistePost([...trie]);
      setcroissantAuteur(false);
      setcroissantCategorie(false);
      setcroissantDate(false);
      setcroissantReponse(false);
    }
  }

  const trieDate=()=>{
    if(croissantDate===false){
      const trie = [...listePost]
      trie.sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation));
      setlistePost([...trie]);
      setcroissantDate(true);
      setcroissantCategorie(false);
      setcroissantAuteur(false);
      setcroissantReponse(false);
    }
    if(croissantDate===true){
      const trie = [...listePost]
      trie.sort((a, b) => new Date(a.dateCreation) - new Date(b.dateCreation));
      setlistePost([...trie]);
      setcroissantDate(false);
      setcroissantCategorie(false);
      setcroissantAuteur(false);
      setcroissantReponse(false);
    }
  }

  return {trieDate,trieCategorie,triePseudo,trieReponse,croissantAuteur,croissantCategorie,croissantDate,croissantReponse}
}

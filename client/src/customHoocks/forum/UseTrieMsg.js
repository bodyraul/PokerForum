import React from 'react'
import { useContext } from 'react'
import TrieMsgContext from '../../Context/TrieMsgContext'

export default function UseTrieMsg(setMessage,message) {
 const {croissantAuteur,setcroissantAuteur,croissantDate,setcroissantDate}= useContext(TrieMsgContext); 

  const triePseudo=()=>{
    if(croissantAuteur===false){
      const trie = [...message]
      trie.sort((a, b) => a.pseudoCreateurMessage.localeCompare(b.pseudoCreateurMessage));
      setMessage([...trie]);
      setcroissantAuteur(true);
      setcroissantDate(false);
    }
    if(croissantAuteur===true){
      const trie = [...message]
      trie.sort((a, b) => b.pseudoCreateurMessage.localeCompare(a.pseudoCreateurMessage));
      setMessage([...trie]);
      setcroissantAuteur(false);
      setcroissantDate(false);
    }
  }

  const trieDate=()=>{
    if(croissantDate===false){
        console.log(message)
      const trie = [...message]
      trie.sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation));
      setMessage([...trie]);
      setcroissantDate(true);
      setcroissantAuteur(false);
    }
    if(croissantDate===true){
      const trie = [...message]
      trie.sort((a, b) => new Date(a.dateCreation) - new Date(b.dateCreation));
      setMessage([...trie]);
      setcroissantDate(false);
      setcroissantAuteur(false);
    }
  }

  return{croissantAuteur,setcroissantAuteur,croissantDate,setcroissantDate,trieDate,triePseudo}
}

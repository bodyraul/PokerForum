import { useState,useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import SpinnerContext from "../../Context/SpinnerContext";

export default function UseMessagePost(config,id){
    const [post, setpost] = useState([]); 
    const [message, setMessage] = useState([]); 
    const {setSpin}=useContext(SpinnerContext);

    useEffect(() => {
      setSpin(true);

    async function lePoste() {

      await axios
      .get(`/post/lePoste/${id}`, config)
      .then((res)=>{
        setpost(res.data);
      })   
        .catch((err) => {
          console.log(err);
        });
    }

    async function message() {

      await axios
        .get(`/message/messagePost/${id}`)
        .then((res) => {
          setMessage(res.data);
          setSpin(false);
        })
        .catch((err) => {
          console.log(err);
          setSpin(false);
        });
    }

    const loadPost = setTimeout(() => {
      lePoste();
    }, 300);  
    
    const loadMsg = setTimeout(() => {
       message();
    }, 300);

    return ()=>{
      clearTimeout(loadPost);
      clearTimeout(loadMsg);
    }

  }, [config,id,setSpin])
 
  return {post,message,setMessage}
}
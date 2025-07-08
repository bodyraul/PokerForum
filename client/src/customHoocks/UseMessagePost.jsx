import { useState,useEffect } from "react";
import axios from "axios";

export default function UseMessagePost(config,id){
    const [post, setpost] = useState([]); 
    const [message, setMessage] = useState([]); 

    useEffect(() => {
    async function message() {
      await axios
        .get(`http://localhost:5000/message/messagePost/${id}`)
        .then((res) => {
          setMessage(res.data);
        })
        .catch((err) => console.log(err));
    }

    async function lePoste() {
      await axios
      .get(`http://localhost:5000/post/lePoste/${id}`, config)
      .then((res)=>setpost(res.data))   
        .catch((err) => console.log(err));
    }
    message();
    lePoste();
  }, [config,id])
 
  return {post,message,setMessage}
}
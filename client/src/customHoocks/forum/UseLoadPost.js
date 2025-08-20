import { useState,useEffect } from "react";
import axios from "axios";

export default  function UseLoadPost (){
    const [listePost, setlistePost] = useState([]);
    useEffect(() => {
    axios.get("http://localhost:5000/post")
    .then((res)=>setlistePost(res.data))
    .catch((err)=>console.log(err))

  }, [])
return {listePost,setlistePost}
}
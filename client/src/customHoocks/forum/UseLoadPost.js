import { useState,useEffect } from "react";
import axios from "axios";

export default  function UseLoadPost (){
    const [listePost, setlistePost] = useState([]);
    useEffect(() => {
    axios.get("/post")
    .then((res)=>setlistePost(res.data))
    .catch((err)=>console.log(err))

  }, [])
return {listePost,setlistePost}
}
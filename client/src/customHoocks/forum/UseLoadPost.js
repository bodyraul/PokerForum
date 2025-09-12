import { useState,useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import SpinnerContext from "../../Context/SpinnerContext";

export default  function UseLoadPost (){

    const {setSpin}=useContext(SpinnerContext);
    const [listePost, setlistePost] = useState([]);

    useEffect(() => {
      setSpin(true);
      const loadPost = setTimeout(() => {
        axios.get("/post")
        .then((res)=>{
          setlistePost(res.data);
          setSpin(false);
        })
        .catch((err)=>{
          console.log(err);
          setSpin(false);
        })
        }, 300);  

        return ()=>{
          clearTimeout(loadPost);
        }

  }, [setSpin])
return {listePost,setlistePost}
}
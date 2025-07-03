import { useState,useEffect } from "react";
import axios from "axios";

export default  function UseLoadCategories (){
    const [categories, setcategories] = useState([])
    useEffect(() => {
    axios.get("http://localhost:5000/categorie/afficherAllCategories")
    .then((res) => setcategories(res.data))
    .catch((err) => console.log(err));
}, [])
return categories
}
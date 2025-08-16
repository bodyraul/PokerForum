import axios from "axios";

   export default async function choiseCategoriesSearch  (e,setlistePost) {
    await axios
      .get(`http://localhost:5000/post/posteParCategorie/${e.target.value}`)
      .then((res) => setlistePost(res.data))
      .catch((err) => console.log(err));
    };
import axios from "axios";

   export default async function choiseCategoriesSearch  (e,setlistePost) {
    await axios
      .get(`/post/posteParCategorie/${e.target.value}`)
      .then((res) => setlistePost(res.data))
      .catch((err) => console.log(err));
    };
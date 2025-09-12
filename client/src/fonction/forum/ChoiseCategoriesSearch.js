import axios from "axios";

   export default  function choiseCategoriesSearch  (e,setlistePost,setcurrentPage,setSpin) {
    setSpin(true);
    async function postParCategorie() {
        await axios
        .get(`/post/posteParCategorie/${e.target.value}`)
        .then((res) => {
          setlistePost(res.data)
          setcurrentPage(1);
          setSpin(false);
        })
        .catch((err) => {
          console.log(err);
          setSpin(false);
        });
      };
        setTimeout(() => {
          postParCategorie();
        }, 300);
    }
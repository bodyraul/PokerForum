import axios from "axios";

   export default  function choiseCategoriesSearch  (e,setlistePost,setcurrentPage,setSpin,setcroissantCategorie,setcroissantReponse,setcroissantDate,setcroissantAuteur) {
    setSpin(true);
    async function postParCategorie() {
        await axios
        .get(`/post/posteParCategorie/${e.target.value}`)
        .then((res) => {
          setlistePost(res.data)
          setcurrentPage(1);
          setSpin(false);
          setcroissantAuteur(false);
          setcroissantCategorie(false);
          setcroissantReponse(false);
          setcroissantDate(true);
        })
        .catch((err) => {
          console.log(err);
          setSpin(false);
          setcroissantAuteur(false);
          setcroissantCategorie(false);
          setcroissantReponse(false);
          setcroissantDate(true);
        });
      };
        setTimeout(() => {
          postParCategorie();
        }, 300);
    }
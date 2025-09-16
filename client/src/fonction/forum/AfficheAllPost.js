import axios from "axios"

export default function AfficheAllPost(setlistePost,setSpin,setcroissantCategorie,setcroissantAuteur,setcroissantDate,setcroissantReponse){
    setSpin(true);
    setTimeout(() => {
        axios
        .get("/post")
        .then((res) => {
            setlistePost(res.data);
            setSpin(false);
            setcroissantAuteur(false);
            setcroissantCategorie(false);
            setcroissantDate(true);
            setcroissantReponse(false);
        })
        .catch((err) => {
            console.log(err);
            setSpin(false);
        })
    }, 300);
}
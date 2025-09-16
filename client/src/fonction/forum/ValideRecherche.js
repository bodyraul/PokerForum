import axios from "axios";

export default function valideRecherche(setlistePost,valueAuteurSujet,recherchePost,setrecherchePost,setcurrentPage,seterrorMsgCategorie,setSpin,setcroissantCategorie,setcroissantAuteur,setcroissantDate,setcroissantReponse){

    if(recherchePost===""){
        seterrorMsgCategorie("La recherche est vide.")
        return;
    }

    if (valueAuteurSujet === "sujet") {  
        setSpin(true);       
        const mot = recherchePost;
        setTimeout(() => {
            axios
            .get(`/post/recherchepostesParmot/${mot}`)
            .then((res) => {
                setlistePost(res.data);
                setcurrentPage(1);
                setSpin(false);
                setcroissantAuteur(false);
                setcroissantCategorie(false);
                setcroissantDate(true);
                setcroissantReponse(false);
            })
            .catch((err) => {
                if(err.response.status===404){
                    seterrorMsgCategorie(err.response.data);
                    setSpin(false);
                }
            });
        }, 300);
    }
    if (valueAuteurSujet === "auteur") {
        setSpin(true);
        const pseudoCreateur = recherchePost;
        setTimeout(() => {
            axios
            .get(`/post/recherchepostesParPseudo/${pseudoCreateur}`)
            .then((res) => {
                setlistePost(res.data);
                setcurrentPage(1);
                setSpin(false);
                setcroissantAuteur(false);
                setcroissantCategorie(false);
                setcroissantDate(true);
                setcroissantReponse(false);
            })
            .catch((err) => {
                if(err.response.status===404){
                    seterrorMsgCategorie(err.response.data);
                    setSpin(false);
                }
            });
        }, 300);
        }
        setrecherchePost("");
    }
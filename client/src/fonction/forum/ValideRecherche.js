import axios from "axios";

export default function valideRecherche(setlistePost,valueAuteurSujet,recherchePost,setrecherchePost,setcurrentPage,seterrorMsgCategorie){

    if(recherchePost===""){
        seterrorMsgCategorie("La recherche est vide.")
        return;
    }

    if (valueAuteurSujet === "sujet") {         
        const mot = recherchePost;
        axios
        .get(`/post/recherchepostesParmot/${mot}`)
        .then((res) => {
            setlistePost(res.data);
            setcurrentPage(1);
        })
        .catch((err) => {
             if(err.response.status===404){
                seterrorMsgCategorie(err.response.data)
            }
        });
    }
    if (valueAuteurSujet === "auteur") {
        const pseudoCreateur = recherchePost;
        axios
        .get(`/post/recherchepostesParPseudo/${pseudoCreateur}`)
        .then((res) => {
            setlistePost(res.data);
            setcurrentPage(1);
        })
        .catch((err) => {
            if(err.response.status===404){
                seterrorMsgCategorie(err.response.data)
            }
        });
        }
        setrecherchePost("");
    }
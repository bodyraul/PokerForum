import axios from "axios";

export default function valideRecherche(setlistePost,valueAuteurSujet,recherchePost,setrecherchePost,setcurrentPage){

    if (valueAuteurSujet === "sujet") {         
        const mot = recherchePost;
        axios
        .get(`http://localhost:5000/post/recherchepostesParmot/${mot}`)
        .then((res) => {
            setlistePost(res.data);
        })
        .catch((err) => {
            console.log(err)
        });
    }
    if (valueAuteurSujet === "auteur") {
        const pseudoCreateur = recherchePost;
        console.log("auteur")
        axios
        .get(`http://localhost:5000/post/recherchepostesParPseudo/${pseudoCreateur}`)
        .then((res) => {
            setlistePost(res.data);
            setcurrentPage(1);
        })
        .catch((err) => {
            console.log(err)
        });
        }
        setrecherchePost("");
    }
import axios from "axios"

export default function AfficheAllPost(setlistePost,setSpin){
    setSpin(true);
    setTimeout(() => {
        axios
        .get("/post")
        .then((res) => {
            setlistePost(res.data);
            setSpin(false);
        })
        .catch((err) => {
            console.log(err);
            setSpin(false);
        })
    }, 300);
}
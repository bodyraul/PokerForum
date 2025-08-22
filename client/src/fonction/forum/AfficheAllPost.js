import axios from "axios"

export default function AfficheAllPost(setlistePost){
    axios
    .get("/post")
    .then((res) => setlistePost(res.data))
    .catch((err) => console.log(err))
}
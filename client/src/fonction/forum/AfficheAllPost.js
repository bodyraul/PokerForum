import axios from "axios"

export default function AfficheAllPost(setlistePost){
    axios
    .get("http://localhost:5000/post")
    .then((res) => setlistePost(res.data))
    .catch((err) => console.log(err))
}
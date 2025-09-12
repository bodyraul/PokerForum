
import { useContext } from "react";
import ListePostContext from "../../Context/ListePostContext";
import PagePostContext from "../../Context/PagePostContext";
import { useState } from "react";

export default function UseNbPagePost(){
    const {listePost}=useContext(ListePostContext);
    const {currentPage,setcurrentPage}=useContext(PagePostContext);
    const [postPerPage, setpostPerPage] = useState(3);
    const indexOfLastPost =currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost-postPerPage;
    const currentPosts = listePost.slice(indexOfFirstPost,indexOfLastPost);
    const nbPage = Math.ceil(listePost.length/postPerPage);

    return {currentPosts,currentPage,setcurrentPage,nbPage};
}
import { useState } from "react";
import { useContext } from "react";
import PageMsgContext from "../../Context/PageMsgContext";


export default function UseNbPageMsg(message){
    const {currentPage,setcurrentPage}=useContext(PageMsgContext);
    const [postPerPage, setpostPerPage] = useState(3);
    const indexOfLastPost =currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost-postPerPage;
    const currentPosts = message.slice(indexOfFirstPost,indexOfLastPost);
    const nbPage = Math.ceil(message.length/postPerPage)
    return {currentPosts,currentPage,setcurrentPage,nbPage}
}
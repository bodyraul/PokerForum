export default function ScrollToNewPost(){
    document.querySelector(".creationPost").scrollIntoView({
      behavior: "smooth",
    });
}

export default function resetAllRadio (){
    const allInputRadio = document.querySelectorAll(".inputRadio");
      allInputRadio.forEach((element) => {
        element.checked = false;
    });
}
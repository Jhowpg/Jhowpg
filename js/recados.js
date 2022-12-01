document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".recados fieldset input").forEach((input) => {
        input.addEventListener("change", () =>{
            if (input.checked){
                input.parentElement.classList.add("lido");
            }else{
                input.parentElement.classList.remove("lido");
            }
        })
    })
})
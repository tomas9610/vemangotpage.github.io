
let divAccent = document.getElementById("divAccent")

/*Leemos el scroll */
window.onscroll = function() {
    var y = window.scrollY;

    if(y >= 100){
        divAccent.classList.remove("div-accent")
        divAccent.classList.add("div-accent-light")
    }else{
        divAccent.classList.remove("div-accent-light")
        divAccent.classList.add("div-accent")
    }

  };

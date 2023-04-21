

let openMenu = document.getElementById("menu_open")
let closeMenu = document.getElementById("menu_close")
let menu = document.getElementById("menu")


/*Abrir menu */
const openNav = () => {

    menu.classList.remove("menu__inactive")
    menu.classList.add("menu__active")

  }

  /*Cerrar menú */
  const closeNav = () => {

    menu.classList.add("menu__inactive")
    menu.classList.remove("menu__active")

  }



openMenu.addEventListener("click", e => {

    openNav()

})

closeMenu.addEventListener("click", e => {

    closeNav()

})


//Reproductor de video

let boton = document.getElementById('boton');
let boton2 = document.getElementById('boton2'); 
let video=document.getElementById('video'); 

boton.addEventListener('click', presionar, false); 
boton2.addEventListener('click', presionar2, false); 


function presionar() { 
   video.play(); 
} 

function presionar2() { 
  video.pause(); 
} 
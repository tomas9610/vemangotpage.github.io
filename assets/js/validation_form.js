

//Validar el formulario
//Este convierte los elementos obtenidos atraves de la clase en array
let validation_inp = Array.from(document.getElementsByClassName("validation_inp"))
let myForm = document.getElementById("myForm")
let allClas = []


//Estas son las expresiones regulares, se obtuvo del video de FALCON MASTE
const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

//Es es el objeto de los campos y cambiarán en caso de error o verdadero.
const campos = {
	name: false,
	email: false,
	phone: false
}


//Remover y agregar clases
const removeClass = (element, allClass) => {

    allClass[0].forEach(el => element.classList.add(el) )  //Agregar clases
    allClass[1].forEach(el => element.classList.remove(el) ) //Remover clases

}


const validateFill = (expresion, dato) => {

	//La función test es la forma en la que se ingresa al valor de la expresion y valida si es correcta

	if(expresion.test(dato.value)){

        allClas = [["contact__form--valid"], ["contact__form--invalid", "contact__form--basic"]]
        removeClass(dato,allClas)

        //Cambia la clase del span
        allClas = [["form__span--hidd"], ["form__span--err"]]
        removeClass(dato.nextElementSibling, allClas)

        campos[dato.name] = true //Cambia la bandera en caso que este válido

	} else {

        allClas = [["contact__form--invalid"], ["contact__form--valid", "contact__form--basic"]]
        removeClass(dato,allClas)

        //Cambia la clase del span
        allClas = [["form__span--err"], ["form__span--hidd"]]
        removeClass(dato.nextElementSibling, allClas)

        campos[dato.name] = false //Cambia la bandera en caso de errores


	}


}


//Validacion de formulario
const validateForm = (e) => {

    for (const key in campos) {
        //Comparamos el nombre con el campo del objeto
        if(e.target.name == key){

            //Mandamos la expresion
            validateFill(expresiones[key], e.target)

            //Detenemos el ciclo
            return 0

        }
    }

}



//Validamos los datos que ingresa el usuario
validation_inp.forEach(input => {

    //Le enviamos el evento aunque no sea visible
    input.addEventListener("keyup", validateForm)


    //Esto quita la clase de valor válido
    addEventListener("focusout", (e) => {
        if(!e.target.classList.contains("contact__form--invalid")){

            allClas = [["contact__form--basic"], ["contact__form--valid"]]
            removeClass(e.target,allClas)

        }
    });
    
});


//Con esto enviamos el formulario
myForm.addEventListener("submit", e => {

    e.preventDefault()

    if(campos.name && campos.email && campos.phone){

        alert("El formulario se ha enviado exitosamente")

    }


})
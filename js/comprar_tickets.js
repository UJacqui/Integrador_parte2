//valor de ticket
const valorDeTicket = 200;

let descuentoEstudiante = 80;
let descuentoTrainne = 50;
let descuentoJunior = 15;

let nombre              = document.getElementById("nombre");
let apellido            = document.getElementById("apellido");
let mail                = document.getElementById("mail");
let cantidad            = document.getElementById("cantidadDeTicket");
let categoria           = document.getElementById("categoria");


let btnResumen  = document.getElementById("btnResumen");
let btnBorrar   = document.getElementById("btnBorrar");
let totalPago   = document.getElementById("inputPagar");


//funcion para quitar la clase de error
function quitarError(){
    let x= document.querySelectorAll(".form-control, .form-select");

    for(let i = 0; i < x.length; i++) {
        x[i].classList.remove("is-invalid");
    }
}

function resetPagar(){

}

function pagar(){  

    quitarError();

    if(nombre.value === ""){ 
        alert("por favor, escribi tu nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }
    

    if(apellido.value == ""){
    alert("por favor, escribi tu apellido.");
    apellido.classList.add("is-invalid");
    apellido.focus();
    return;
    }
    
    if(mail.value == ""){
    alert("por favor, escribi tu mail.");
    mail.classList.add("is-invalid");
    mail.focus();
        return;
        }


     if(cantidad.value == ""){
     alert("por favor, indica la cantidad de tickets.");
     cantidad.classList.add("is-invalid");
     cantidad.focus();
     return;
     }
    
    if(categoria.value == ""){
    alert("por favor, indica tu categoria.");
    categoria.classList.add("is-invalid");
    categoria.focus();
     return;
               
    }

    /* const emailValido = mail =>{
        return /^[^\s@]+ @[^\s@]+\.[^\s@]+$/.test(mail);
    } */

    const emailValido = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    if(!emailValido(mail.value)) {        
    
        alert("Por favor, escribí un email valido.")
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

    //descuentos

    let totalValorDeTickets =(cantidadDeTicket.value) * valorDeTicket;

    if(categoria.value == 0) {
        totalValorDeTickets = valorDeTicket;
    }

    if(categoria.value == 1) {
        totalValorDeTickets = totalValorDeTickets - (descuentoEstudiante/ 100 * totalValorDeTickets);
    }

    if(categoria.value == 2) {
        totalValorDeTickets = totalValorDeTickets - (descuentoTrainne/ 100 * totalValorDeTickets);
    }

    if(categoria.value == 3) {
        totalValorDeTickets = totalValorDeTickets - (descuentoJunior/ 100 * totalValorDeTickets);
    }

    
    btnBorrar.addEventListener('click', resetPagar);
    
    //inserto valor en HTML
    totalPago.innerHTML = totalValorDeTickets;
    
}
//boton resumen
btnResumen.addEventListener('click', pagar);

function resetPagar() {
    quitarError();
    totalPago.innerHTML = "";
}
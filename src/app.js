document.addEventListener('DOMContentLoaded', function() {
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }
    
//seleccionar los elementos de la interfaz
const inputEmail = document.querySelector('#email');
const inputNombre = document.querySelector('#nombre')
const inputMensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('#formulario');
const btnSubmit = document.querySelector('#formulario button[type="submit"]');

const spinner = document.querySelector("#spinner");

//Asignar evento
inputEmail.addEventListener('blur', validar)

inputNombre.addEventListener('blur', validar)

inputMensaje.addEventListener('blur', validar)

formulario.addEventListener('submit', enviarEmail);

btnReset.addEventListener('click', function(e) {
    e.preventDefault();

    resetFormulario();
})





function validar(e) {
   if(e.target.value.trim() === '') {
        mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        email[e.target.name] = '';
        comprobarEmail();
        return;
   } 
   if(e.target.id === 'email' &&!validarEmail(e.target.value)) {
    mostrarAlerta('El email no es válido', e.target.parentElement);
    email[e.target.name] = '';
    comprobarEmail();
    return;
   };

   limpiarAlerta(e.target.parentElement);


   //Asignar los valores
   email[e.target.name] = e.target.value.trim().toLowerCase()


   //comprobar el objeto de email
   comprobarEmail();
}

function mostrarAlerta(mensaje, referencia) {
    //comprueba si ya existe una alerta
    const alerta = referencia.querySelector('.bg-alert')
    if(alerta) {
        alerta.remove();
    }



    // Generar alerta en HTML
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-alert', 'text-white', 'p-2', 'text-center')

    //Inyectar el error al formulario
    referencia.appendChild(error)
}


function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.bg-alert')
    if(alerta) {
        alerta.remove();
    }
}

function validarEmail(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const resultado = regex.test(email)
    return resultado;
}



function resetFormulario() {
     //reiniciar el objeto
     email.email = '';
     email.asunto = '';
     email.mensaje = '';

     formulario.reset();
     comprobarEmail();
}})

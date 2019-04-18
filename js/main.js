let usuario = {
    nombre: document.getElementById('inputNombre'),
    apellido: document.getElementById('inputApellido'),
    dni: document.getElementById('inputDNI'),
    fechaDeNacimiento: document.getElementById('inputNacimiento'),
    ingresos: document.getElementById('inputIngresos'),
}


function obtenerEdad(fecha) {
    var hoy = new Date();
    var nacimiento = new Date(fecha);
    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    var mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    if (edad >= 21) {
        return true;
    } else {
        return false;
    }
}
/**  EXPLICACIÓN DE LA FUNCIÓN obtenerEdad() 
  
  
hoy 11-04-2019 
nacimiento 21-07-1997
edad 2019-1997 = 22
mes 04-07 = -3
si el mes es menor a cero (en este caso si porque es menos 3)  ||  o si el mes es igual a cero y además el dia de hoy es menor al dia del nacimiento = restar uno a la edad 

si la edad es mayor o igual que 21 devuelve true y si no devuelve false  =========*/

// Calculos del préstamo:
let montoPrestamo;
let cuotas;
let interes;
let montoAPagar;
let mensaje;

realizarCalculos = () => {
    montoPrestamo = usuario.ingresos.value * 3;
    cuotas = Number(prompt(`¿En cuántas cuotas vas a pagar? \n Ingresá el número que corresponda \n 3) 3 cuotas\n 6) 6 cuotas\n 9) 9 cuotas\n 12) 12 cuotas\n 18) 18 cuotas\n 24) 24 cuotas`))

    switch (cuotas) {
        case 3:
            interes = '8%'
            montoAPagar = montoPrestamo + montoPrestamo * 8 / 100;
            mensaje = `Si deseas pagar tu prestamo de ${montoPrestamo} en 3 cuotas, vas a tener un ${interes} de interés por lo cual vas a tener que devolver  ${Math.round(montoAPagar / 3)} por mes`
            break;
        case 6:
            interes = '16%'
            montoAPagar = montoPrestamo + montoPrestamo * 16 / 100;
            mensaje = `Si deseas pagar tu prestamo de ${montoPrestamo} en 6 cuotas, vas a tener un ${interes} de interés por lo cual vas a tener que devolver  ${Math.round(montoAPagar / 6)} por mes`
            break;
        case 9:
            interes = '24%'
            montoAPagar = montoPrestamo + montoPrestamo * 24 / 100;
            mensaje = `Si deseas pagar tu prestamo de ${montoPrestamo} en 9 cuotas, vas a tener un ${interes} de interés por lo cual vas a tener que devolver  ${Math.round(montoAPagar / 9)} por mes`
            break;
        case 12:
            interes = '32%'
            montoAPagar = montoPrestamo + montoPrestamo * 32 / 100;
            mensaje = `Si deseas pagar tu prestamo de ${montoPrestamo} en 12 cuotas, vas a tener un ${interes} de interés por lo cual vas a tener que devolver  ${Math.round(montoAPagar / 12)}por mes`
            break;
        case 18:
            interes = '48%'
            montoAPagar = montoPrestamo + montoPrestamo * 48 / 100;
            mensaje = `Si deseas pagar tu prestamo de ${montoPrestamo} en 18 cuotas, vas a tener un ${interes} de interés por lo cual vas a tener que devolver  ${Math.round(montoAPagar / 18)} por mes`
            break;
        case 24:
            interes = '62%'
            montoAPagar = montoPrestamo + montoPrestamo * 62 / 100;
            mensaje = `Si deseas pagar tu prestamo de ${montoPrestamo} en 24 cuotas, vas a tener un ${interes} de interés por lo cual vas a tener que devolver  ${Math.round(montoAPagar / 24)} por mes`
            break;


        default:
            break;
    }

}




//Validación de datos del usuario:

validarDatos = () => {
    if (parseInt(usuario.ingresos.value) < 16000) {
        alert('Tus ingresos no son suficientes para utilizar nuestros servicios');
    } else if (!obtenerEdad(usuario.fechaDeNacimiento.value)) {
        alert('Este servicio no está disponible para menores de 21 años');
    } else {
        realizarCalculos();
        generarContenido();
    }
}


//=====================   DOM   =====================

/** Inicializando evento al pulsar el botón */

let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //hace que no se recargue la página (previene el comportamiento por defecto);
    validarDatos();
})

/** Contenido HTML creado a partir del evento */



crearElemento = (elemento) => document.createElement(elemento);

generarContenido = () => {
    let contenedor = document.getElementById('calculoFinal');
    let h2 = document.createElement('h2');
    h2.textContent = `Este es tu préstamo ideal:`;

    contenedor.appendChild(h2);
    contenedor.appendChild(crearElemento('p')).textContent = `Podemos otorgarte hasta $${montoPrestamo} en el acto!`

    contenedor.appendChild(crearElemento('p')).textContent = mensaje;

    scrollTo();
}

function scrollTo() {
    $('html, body').animate({ scrollTop: $('#calculoFinal').offset().top }, 'slow');
    return false;
}
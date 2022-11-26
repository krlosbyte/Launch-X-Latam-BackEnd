/*

for (let i = 0; i < 9; i++) {
    console.log(i)
    if ((i % 2) != 0) {
        continue;
    }
    console.log(i)
}

// if else valdaciones

function validadEdad(edad) {
    if (confirm('¿Estas de acuerdo con seguir con esto?')) {
        console.log("Sigue bajo tu propio riesgo");
        if ( edad >= 18 && edad <= 150 ) {
            console.log("Puedes comprar cigarritos");
        } else if (edad > 150) {
            console.log("Saludame a Cepillin");
        } else if (edad >= 0) {
            console.log("Estas muy chiquito");
        } else {
            console.log("A caray, tu no deberias existir");
        }
    } else {
        console.log("Que miedoso");
    }
}

let edad = prompt("Introduce tu edad");
if (edad && !isNaN(edad)) {
    validadEdad(edad);
    mandarMensajes(edad);
} else {
    alert("Debes indroducir tu edad");
    location.reload();
}

// Switch

function mandarMensajes(edad) {
    switch(edad) {
        case '13':
            console.log("Deberias estar en la secundaria");
            break;
        case '17':
            console.log("Ya casi tocas el timbre");
            break;
        default:
            console.log("No pues no se que decirte");
    }
}

*/

//While

let boletosDisponibles = 1000;

while (boletosDisponibles > 0) {
    console.log("Boleto comprado");
    boletosDisponibles--;
    console.log("Quedan: " + boletosDisponibles);
    console.log("--------------");
}


//Do while

do {
    console.log("Boleto comprado");
    boletosDisponibles--;
    console.log("Quedan: " + boletosDisponibles);
} while (boletosDisponibles > 0);

// Trycatch finally

try {
    balidaredad(edad);
} catch (error) {
    console.error(error);
}







function leercCarta(carta, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(carta.split("").reverse().join(""));0
        }, 2000);
    });
};

function construirJuguete(instruccion) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const juguete = instruccion.split("").reverse().join("");
            if (juguete.includes("madera"))
                return resolve(`${juguete} de madera fina`);
            else if (juguete.includes("xbox"))
                return resolve(`No te puedo mandar tu ${juguete}`);
            else
                return resolve(`Aqui tienes tu cosa esta ${juguete}`);

        }, 5000);
    });
};

function envolverRegalo(jugute) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${jugute} envuelto`);
        }, 3000);
    });
};

leercCarta("Xbox Series X")
     .then((instruccion) => {
        return construirJuguete(instruccion);
     })
     .then((juguete) => {
        return envolverRegalo(juguete);
     })
     .then(console.log);
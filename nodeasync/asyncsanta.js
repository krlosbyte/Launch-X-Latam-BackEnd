// Con async await

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



(async function main() {
    const instruccion = await leercCarta("carrito de madera");
    const juguete = await construirJuguete(instruccion);
    const regalo = await envolverRegalo(juguete, instruccion);
    console.log(regalo);
})();
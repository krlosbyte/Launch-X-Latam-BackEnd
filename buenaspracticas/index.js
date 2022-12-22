let parrafoOne = document.getElementById("parrafoinicial");

parrafoOne.onclick = function() {
    colorloco();
}

function colorloco() {
    const colores = [
        "red",
        "blue",
        "black",
        "green"
    ];

    parrafoOne.style.color = colores[Math.floor(Math.random() * colores.length)];
}
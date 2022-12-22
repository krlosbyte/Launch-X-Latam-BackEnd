
//Proceso asincrono
http = require('node:http');

console.log("Hola");
http.get('http://httpstat.us/200', (res) => {
    console.log(`La API devolvió: ${res.statusCode}`);
});
console.log("Adios");




//SetTimeout
/*setTimeout(function() {
    console.log("Me has esperado")
},2000);*/
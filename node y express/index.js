let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send("Hola mundo");
});

app.post('/', function(req, res) {
    res.send(`Te llamas ${req.body.name}`);
});

let server = app.listen(8080, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Aplicacion escuchando en htpp://$s:$s", host, port);
});
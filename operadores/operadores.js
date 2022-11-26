let x = 5;
let y = 10;

// Asignacion de adicion
x += y; // Es exactamente lo mismo que hacer esto x = x + y
x += y; 

console.log(x);

// Asignacion de resta
y -= x;

console.log(y)

// Asignacion de multiplicacion

x *= y;

console.log("X = " + x)

// Asignacion de modulo o residuo
console.log(y % x);

y %= x;

// Estructura de control if

let var1 = 3;
let var2 = 4;

// Operador igual
if (var1 == var2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

//Operador exactamente igual
if (var1 === var2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}


//Operador de desigualdad
if (var1 != var2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

//  > Operador Mayor que
console.log(var1 > var2);   // Var1 es Mayor que Var2 ?

//  < Operador Menor que
console.log(var1 < var2);   // Var1 es Menor que Var2 ?

// Mayor o igual que
console.log(23 >= 23);

// Menor o igual que
console.log(23 <= 23);

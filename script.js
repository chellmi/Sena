alert("Ejercicio 1");
let producto = 0;
suma = 0;
num1 = parseInt(prompt("Ingrese un numero:"));
num2 = parseInt(prompt("Ingrese un segundo numero:"));
num3 = parseInt(prompt("Ingrese un tercer numero:"));

if (num1 > 0) {
        producto = num2 * num3;
        alert("El producto de " + num2 + " y " + num3 + " es " + producto);
}else {
    suma = num2 + num3;
    alert("La suma de " + num2 + " con "+ num3 + " es: " + suma);
}

alert("Ejercicio 2");

if (num1 == (num2 + num3)) {
    alert("El numero " + num1 + " es igual a la suma de " + num2 + " y " + num3);
} if (num2 == (num1 + num3)) {
    alert("El numero " + num2 + " es igual a la suma de " + num1 + " y " + num3);
} if (num3 == (num2 + num1)) {
    alert("El numero " + num3 + " es igual a la suma de " + num2 + " y " + num1);
}else alert("ninguno de los numeros coincide con la suma de los otros dos");

alert("Ejercicio 3");

for (let index = 3; index < 100; index += 3) {
    document.writeln(index + "<br>");
    suma = suma + index;
}

document.writeln("La suma total es: " + suma);

alert("Ejercicio 4");

let potencia = 1;
let exponente = 0;

while (potencia <= 100) {
    document.writeln("2^" + exponente + " = " + potencia + "<br>");
    exponente = exponente + 1;
    potencia = 2 ** exponente;  
}

alert("Ejercicio 5");

const vcaracter = new Array(5);
const vinverso = new Array(5);

for (let index = 0; index < 5; index++) {
    vcaracter[index] = prompt("Ingrese texto " + index + ":");
}

for (let index = 0; index < 5; index++){
    vinverso[index] = vcaracter[6-index];
}

document.writeln("Los nombre ingresador son:<br>");
for (let index = 0; index < 5; index++){
    document.writeln("posicion " + index + ": " + vinverso[index] + "<br>");
}
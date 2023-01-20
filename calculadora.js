console.log("calculadora")

let dia = String(document.getElementById("dia"));
let mes = String(document.getElementById("mes"));
let anio = String(document.getElementById("anio"));

let fecha = String(anio.concat("-", mes,"-", dia));

console.log(fecha);
//const d = new Date("July 21, 1983 01:15:00");

const d = new Date(fecha);
let day = d.getDay();

console.log(day);

switch (day) {
    case 0:
        day = "Sunday dia inhabil";
        break;
    case 1:
        dayl = "Monday dia laborable";
        break;
    case 2:
        day = "Tuesday dia laborable";
        break;
    case 3:
        day = "Wednesday dia laborable";
        break;
    case 4:
        day = "Thursday dia laborable";
        break;
    case 5:
        day = "Friday dia laborable";
        break;
    case 6:
        day = "Saturday dia inhabil";
}

console.log(day);

function calcularFecha (day) {
    document.getElementById("resultado").innerHTML = day;
    console.log(day)
};
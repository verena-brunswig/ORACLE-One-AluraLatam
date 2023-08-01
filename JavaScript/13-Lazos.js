const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const presupuestoDisponible = 250;

let i = 0;
while(precioCiudad[i] > presupuestoDisponible){
    i++;
}
if (i == ciudadesDisponibles.length)
    console.log("No tenemos pasaje disponible");
else
    console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);
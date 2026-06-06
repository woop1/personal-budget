let nombres = [];
let valores = [];

function registrarMovimiento() {
  const nombre = prompt("Nombre del movimiento:");
  const tipo = prompt("Tipo (ingreso / gasto):");
  const monto = parseFloat(prompt("Monto:"));

  if (
    !nombre ||
    (tipo !== "ingreso" && tipo !== "gasto") ||
    isNaN(monto) ||
    monto <= 0
  ) {
    alert("Datos inválidos. Intenta de nuevo.");
    return;
  }

  const valor = tipo === "ingreso"
    ? monto
    : -monto;

  nombres.push(nombre);
  valores.push(valor);
}

let continuar = "si";

while (continuar === "si") {
  registrarMovimiento();

  continuar = prompt("¿Registrar otro movimiento? (si/no):");
  continuar = continuar
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

imprimirReporte(nombres, valores);

console.log(
  "Promedio de ingresos: $" +
  promedioIngresos(valores).toFixed(2)
);
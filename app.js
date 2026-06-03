let nombres = [];
let valores = [];

function registrarMovimiento() {
  const nombre = prompt("Nombre del movimiento:");
  const tipo = prompt("Tipo (ingreso / gasto):");
  const monto = parseFloat(prompt("Monto:"));

  if (!nombre || (tipo !== "ingreso" && tipo !== "gasto") || isNaN(monto) || monto <= 0) {
    alert("Datos inválidos. Intenta de nuevo.");
    return;
      }

  let valor;

  if (tipo === "ingreso") {
    valor = monto;
  } else {
    valor = -monto;
  }

  nombres.push(nombre);
  valores.push(valor);
}

function calcularSaldo() {
  let saldo = 0;
  for (let i = 0; i < valores.length; i++) {
    saldo += valores[i];
  }
  return saldo;
}

function mostrarResumen() {
  let ingresos = 0;
  let gastos = 0;

  for (let i = 0; i < valores.length; i++) {
    if (valores[i] > 0) {
      ingresos += valores[i];
    } else {
      gastos += valores[i];
    }
  }

  console.log('--- Resumen Final ---');
  console.log('Total de movimientos:', nombres.length);
  console.log('Total ingresos: $' + ingresos.toFixed(2));
  console.log('Total gastos: $' + gastos.toFixed(2));
  console.log('Saldo total: $' + calcularSaldo().toFixed(2));
}

let continuar = 'si';

while (continuar === 'si') {
  registrarMovimiento();

  continuar = prompt('¿Registrar otro movimiento? (si/no):');
  continuar = continuar
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

mostrarResumen();
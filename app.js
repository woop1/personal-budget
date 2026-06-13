const miPresupuesto = new Presupuesto();

miPresupuesto.agregar(new Movimiento("Salario", "ingreso", 3000));
miPresupuesto.agregar(new Movimiento("Cena", "gasto", 45.5));
miPresupuesto.agregar(new Movimiento("Freelance", "ingreso", 500));

<<<<<<< HEAD
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
=======
console.log("--- RESUMEN FINAL ---");
console.log(miPresupuesto.resumen());
>>>>>>> 99877bc (Laboratorio 07: Objetos + POO con class — el modelo del Gestor)

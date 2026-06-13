const miPresupuesto = new Presupuesto();

miPresupuesto.agregar(new Movimiento("Salario", "ingreso", 3000));
miPresupuesto.agregar(new Movimiento("Cena", "gasto", 45.5));
miPresupuesto.agregar(new Movimiento("Freelance", "ingreso", 500));

console.log("--- RESUMEN FINAL ---");
console.log(miPresupuesto.resumen());
const form = document.getElementById("form-mov");
const lista = document.getElementById("lista");
const saldo = document.getElementById("saldo");

const miPresupuesto = new Presupuesto();

// ejemplos iniciales
miPresupuesto.agregar(new Movimiento("Salario", "ingreso", 3000));
miPresupuesto.agregar(new Movimiento("Cena", "gasto", 45.5));
miPresupuesto.agregar(new Movimiento("Freelance", "ingreso", 500));

function render() {
  lista.innerHTML = miPresupuesto.movimientos.map(m => {
    const esIngreso = m.esIngreso();

    const colorTexto = esIngreso ? "text-green-700" : "text-red-700";
    const colorFondo = esIngreso ? "bg-green-50 border-l-4 border-green-500"
                                 : "bg-red-50 border-l-4 border-red-500";

    const signo = esIngreso ? "+" : "-";

    return `
      <li class="flex justify-between p-3 rounded shadow ${colorFondo}">
        <span>${m.nombre} (${m.tipo})</span>
        <span class="${colorTexto}">
          ${signo}$${m.valor.toFixed(2)}
        </span>
      </li>
    `;
  }).join("");

  saldo.textContent = "$" + miPresupuesto.saldo().toFixed(2);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("tipo").value;
  const montoInput = document.getElementById("monto").value.trim();
  const monto = parseFloat(montoInput);

  // 🔴 VALIDACIÓN IMPORTANTE
  if (!nombre.trim() || isNaN(monto) || monto <= 0) {
  alert("Introduce datos válidos");
  return;
}

  miPresupuesto.agregar(new Movimiento(nombre, tipo, monto));

  render();
  form.reset();
});

render();
function app() {
  const elBoton = document.querySelector('#btn-pulsar');
  const elOutput = document.querySelector('#output');

  elBoton.addEventListener('click', () => {
    const msj = 'Boton pulsado';
    elOutput.innerHTML = `<strong>${msj}</strong>`;
  });

  const x = {};
  console.log(x);
}

document.addEventListener('DOMContentLoaded', app);

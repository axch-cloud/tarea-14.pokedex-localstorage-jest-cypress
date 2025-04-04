/**
 * @typedef {import('../entidades/pokemon').default} Pokemon
 */

import { actualizarTextoAyuda } from './general.js';

function mostrarTipos(tipos) {
  const $tipos = document.querySelector('#tipos');
  $tipos.innerHTML = '';

  tipos.forEach((tipo) => {
    const $tipo = document.createElement('span');
    $tipo.textContent = tipo + " ";
    $tipos.appendChild($tipo);
  });
}

function mostrarMovimientos(movimientos) {
  const $movimientos = document.querySelector('#movimientos');

  movimientos.forEach((movimiento) => {
    const { nombre, versiones } = movimiento;
    const $movimientoFila = document.createElement('tr');
    const $movimiento = document.createElement('th');
    $movimiento.setAttribute('scope', 'row');
    $movimiento.textContent = nombre;
    $movimientoFila.appendChild($movimiento);

    const $versiones = document.createElement('td');

    versiones.forEach((version) => {
      const $version = document.createElement('span');
      $version.textContent = version + " ";
      $versiones.appendChild($version);
    });

    $movimientoFila.appendChild($versiones);
    $movimientos.appendChild($movimientoFila);
  });
}

function mostrarHabilidades(habilidades) {
  const $habilidades = document.querySelector('#habilidades');
  $habilidades.innerHTML = '';
  habilidades.forEach((habilidad) => {
    const $habilidad = document.createElement('span');
    $habilidad.textContent = habilidad + " ";

    $habilidades.appendChild($habilidad);
  });
}

/**
 * @param {Pokemon} pokemon
 */
export default function mostrarPokemon(pokemon) {
  const {
    id,
    nombre,
    foto,
    tipos,
    habilidades,
    movimientos,
  } = pokemon;

  document.querySelector('#pokemon-contenedor').style.display = 'block';
  actualizarTextoAyuda('');

  const $imagen = document.querySelector('#pokemon-imagen');
  $imagen.setAttribute('src', foto);
  $imagen.setAttribute('alt', `Imagen frontal del pokemon ${nombre}`);

  document.querySelector('#pokemon-nombre').textContent = nombre;
  document.querySelector('#pokemon-id').textContent = id;

  mostrarTipos(tipos);
  mostrarHabilidades(habilidades);
  mostrarMovimientos(movimientos);
}

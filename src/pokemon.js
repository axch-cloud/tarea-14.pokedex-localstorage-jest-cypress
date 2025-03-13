import {cargarPokemon, cargarPokemones} from './servicios/pokemon.js';

export default async function inicializar() {
  console.log(await cargarPokemon(1));
  console.log(await cargarPokemones());
}



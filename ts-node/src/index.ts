import {  MiPokemon } from './decorators/pokemon-class';
// import { getPokemon } from './generics/get-pokemon';


/*getPokemon(4)
    .then( pokemon => console.log(pokemon.sprites.front_default) )
    .catch( err => console.log(err))
    .finally( ()=> console.log('Fin de getPokemon') )*/

    const charmander = new MiPokemon('Charmander')

    console.log(charmander)
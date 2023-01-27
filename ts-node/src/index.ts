import { getPokemon } from './generics/get-pokemon';


getPokemon(1)
    .then( resp => console.log(resp) )
    .catch( err => console.log(err))
    .finally( ()=> console.log('Fin de getPokemon') )
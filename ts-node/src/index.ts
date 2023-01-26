// import { Hero as SuperHero } from './classes/Hero';
import * as HeroClasess from './classes/Hero'; //acceso a todo lo que está exportando ese archivo
import myPowers, { Power } from './data/powers';


// const iroman = new SuperHero('Ironman', 1, 55)
const iroman = new HeroClasess.Hero('Ironman', 1, 55)



console.log( iroman.power )
console.log( myPowers )


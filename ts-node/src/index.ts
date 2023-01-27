// import { Hero as SuperHero } from './classes/Hero';
// import * as HeroClasess from './classes/Hero'; //acceso a todo lo que está exportando ese archivo
// import myPowers, { Power } from './data/powers';
import { printObject, genericFunction, genericFunctionArrow} from './generics/generics';


// const iroman = new SuperHero('Ironman', 1, 55)
// const iroman = new HeroClasess.Hero('Ironman', 1, 55)



// console.log( iroman.power )
// console.log( myPowers )

// printObject(123)
// printObject(new Date())
// printObject({a:1, b:2, c:3})
// printObject([1,2,3,4,5,6,7,8, 9, 10])
// printObject('hola mundo')

const name: string = 'Luceli' 

console.log( genericFunction(3.1416).toFixed(2) )
console.log( genericFunction(name).toUpperCase() )
console.log( genericFunction( new Date() ).getDate() )

console.log( genericFunctionArrow('Hola mundo').toUpperCase() )



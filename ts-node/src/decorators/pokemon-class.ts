
function printToConsole( constructor: Function ) {
    console.log(constructor)
}

@printToConsole
export class MiPokemon {
    public publicApi: string = 'https://pokeapi.co/' 

    constructor(
        public name:string
    ){
        
    }

}
(
    ()=> {
        // restArgs es el resto de los parametros/argumentos como un arreglo de strings
        const fullname = ( firstname:  string, ...restArgs:string[] ): string => {

            return `${firstname} ${restArgs.join(' ')}` //concateno el resto de strings con join
        }

        const superman = fullname('Clark', 'Kent', 'Joseph') // parametros, el primero es obligatorio
        console.log({superman})
    }
)()
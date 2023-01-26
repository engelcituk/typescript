(
    ()=> {
        // el ? es para indicar que es opcional, upper:boolean = false para indicar valores por defecto
        const fullName = (firstName: string,  upper:boolean = false, lastname?: string,): string => {
            if(upper){
                return `${firstName} ${lastname || '--'}`.toUpperCase()
            } else {
                return `${firstName} ${lastname || '--'}`
            }
        }

        const name = fullName('Tony', true, 'Stark')

        console.log({name})
    }
)()
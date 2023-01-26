(
    ()=> {
        // el ? es para indicar que es opcional
        const fullName = (firstName: string, lastname?: string): string => {
            return `${firstName} ${lastname || '--'}`
        }

        const name = fullName('Tony' )

        console.log({name})
    }
)()
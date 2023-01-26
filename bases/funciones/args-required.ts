(
    ()=> {
        const fullName = (firstName: string, lastname: string): string => {
            return `${firstName} ${lastname}`
        }

        const name = fullName('Tony', 'Stark')

        console.log({name})
    }
)()
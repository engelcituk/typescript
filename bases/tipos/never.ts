(
    ()=>{
        // con never, se termina el código, se termina de ejecutar la aplicación
        const error = ( message: string ):never => {
            throw new Error( message )
        }

        // error('Auxilio')
    }
)()
(
    ()=>{
        // Void es para indicar que no hay un valor de retorno, es buena practica poner el tipo de retorno como void
        // de esta manera si se usa return con un valor typescript va marcar un error
        function callBatman(): void{
            return
        }

        const callSuperman = ():void =>{
            return
        }
        const a = callBatman()
        console.log(a)
    }
)()
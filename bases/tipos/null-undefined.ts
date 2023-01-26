(
    ()=>{
        // null no es lo mismo que undefined
        let nada: undefined = undefined
        let isNull: (boolean | null) = null

        let isActive: (boolean|undefined) = undefined
        console.log(isActive)
    }
)()
(
    ()  =>{
        const hero: string = 'Flash'

        // string es el tipo de dato del retorno
        function returnName():string{
            return hero
        }

        const activateBatSignal = ():string => {
            return 'Batiseñal activada!'
        }

        console.log( typeof activateBatSignal)

        const heroName = returnName();
    }
)()
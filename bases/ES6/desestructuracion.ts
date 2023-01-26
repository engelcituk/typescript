(
    ()=> {
        type Avenger = {
            nick: string,
            ironman: string,
            vison: string,
            activo: boolean,
            poder: number
        }
        const avengers: Avenger = {
            nick: 'Samuel L. Jacson',
            ironman: 'Robert Downey Jr.',
            vison: 'Paul Bettany',
            activo: true,
            poder: 1600
        }

        const { poder, activo, vison} = avengers
        // console.log(poder, activo, vison.toUpperCase() )

        const printAvenger = ( {ironman, ...resto}: Avenger) => {
            console.log(ironman, resto)
        }

        // printAvenger(avengers)

        const avengersArr: [string, string, string, boolean, number] = [
            'cap. America',
            'Ironman',
            'Hulk',
            true,
            123.54
        ]

        const [, iroman, hulk, boolean] = avengersArr
        // console.log(iroman)
        // console.log(hulk)
        // console.log(boolean)


    }
)()
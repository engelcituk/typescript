
(
    () => {
        type Avenger = {
            name: string,
            weapon: string
        }

        const ironman: Avenger = {
            name: 'Ironman',
            weapon: 'Armor Suit'
        }

        const CapAmerica: Avenger = {
            name: 'Capitan America',
            weapon: 'Shield'
        }

        const thor: Avenger = {
            name: 'Thor',
            weapon: 'Mjolnir'
        }

        const avengers: Avenger[] = [
            ironman,
            CapAmerica,
            thor
        ] 

        for (const avenger of avengers) {
            console.log(avenger)
        }
    }
)()
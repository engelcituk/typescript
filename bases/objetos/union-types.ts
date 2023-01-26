(
    ()=> {
        type Hero = {
            name: string;
            age?: number;
            powers: number[];
            getName?: () => string 
        }

        let myCustomVariable: (string |number | Hero) = 'eCituk';
        console.log( typeof myCustomVariable)

        myCustomVariable = 20;
        console.log( typeof myCustomVariable)

        myCustomVariable = {
            name: 'Bruce',
            age: 33,
            powers:[1000],
        }
        console.log( typeof myCustomVariable)
        console.log(myCustomVariable)


    }
)()
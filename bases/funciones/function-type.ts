(
    ()=> {
        const addNumbers = (a: number, b:number): number => a +b
        const greet = ( name: string): string => `Hola ${ name }`
        const saveTheWorld = (): string => `El mundo está salvado`

        //si la funciones no regresan nada se pone el void
        

        // let myFunction: Function;
        let myFunction: (a: number, b:number) => number; 

        myFunction = addNumbers
        console.log(myFunction(1, 2))
        
        let myFunction2: (a: string) => string; 
        myFunction2 = greet
        console.log(myFunction2('eCituk'))

        let myFunction3: () => string; 
        myFunction3 = saveTheWorld
        console.log( myFunction3() )
    }
)()
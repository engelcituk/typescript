(
    ()=> {
        let avenger: any = 23
        let exists;
        let power

        avenger = 'Dr Strange';

        // console.log( avenger.charAt(0) );
        console.log( (avenger as string ).charAt(0) );// casteo


        avenger = 150.95489546854;
        console.log( <number>avenger.toFixed(2) );//otra forma de casteo

        console.log( exists );
        console.log( power );

    }
)()
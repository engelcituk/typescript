(()=>{
    // Sirven para crear otras clases, o para asegurarse de que otras clases implementen lo que uno espera
    //son como cascarones para crear clases
    abstract class Mutante {
        constructor(
            public name:string,
            public realName:string
        ){

        }
    }

    class Xmen extends Mutante{
        salvarMundo(){
            return 'mundo a salvo'
        }
    }

    class Villian extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado'
        }
    }

    const wolwerine = new Xmen('Wolwerine', 'Logan')
    const magneto = new Villian('Magneto', 'Magnus')


    // console.log(wolwerine.salvarMundo())
    // console.log(magneto.conquistarMundo())

    const printName = (  character: Mutante) =>{
        console.log(character.realName )
    }

    // printName(wolwerine)
    // printName(magneto)


})()
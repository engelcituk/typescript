(()=>{
    class Avenger {

        constructor(
            public name:string,
            public realName:string,

        ){
            // console.log('contructor avenger LLamados')   
        }
        // Solo permite acceder a estos metodos o propiedades desde clases que extienda de Avenger
        protected getFullname(){
            return `${this.name} ${this.realName}`
        }
        //private solo permite acceder desde la misma clase
    }

    class Xmen extends Avenger  {

        constructor(
            name:string,
            realName:string,
            public isMutant:boolean
        ) {
            super(name, realName)
            // console.log('Constructo Xmen llamado')
        }

        get fullName(){
            return `${this.name} - ${this.realName}`
        }

        set fullName(name:string ){
            if(name.length < 3){
                throw new Error('El nombre debe ser mayor a 3 letras')
            }
            this.name = name 
        }

        getFullNameDesdeXmen(){
            // console.log( super.getFullname() )
        }

    }

    const wolwerine = new Xmen('Wolwerine', 'Logan', true)

    // console.log(wolwerine.fullName)

    wolwerine.fullName = 'luc'

    // console.log(wolwerine.fullName)

    // wolwerine.getFullNameDesdeXmen()
})()
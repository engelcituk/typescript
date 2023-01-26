(
    ()=>{
        class Avenger {
            // private name: string;
            // private team: string;
            // public realName?:string;
            static  avgAge:number = 35 //se puede acceder a esta sin crear una instancia de la clase

            static getAvgAge(){
                return this.name
            };

            constructor(
                private name:string,
                private team:string,
                public realName?: string,
            ){   
            }

            public bio(){
                return `${this.name} (${this.team})`
            }
        } 

        const antMan: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang')
        // console.log(antMan.bio())

        // console.log(Avenger.getAvgAge())



    }
)()
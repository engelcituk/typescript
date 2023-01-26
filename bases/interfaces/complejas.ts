(()=>{

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id:string):string
    }

    interface Address {
        id: number,
        zip: number,
        city: string,
    }
    
    const client: Client = {
        name: 'Luceli',
        age: 28,
        address:{
            id: 125,
            zip: 456,
            city: 'MEx'
        },
        getFullAddress(id: string){
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Lu',
        age: 28,
        address:{
            id: 23,
            zip: 9383,
            city: 'Fcp'
        },
        getFullAddress(id: string){
            return this.address.city;
        }
    }    
})
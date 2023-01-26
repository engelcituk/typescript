import powers from '../data/powers';
export class Hero {
    constructor(
        public name: string,
        public powerId:number, 
        public age: number
    ) {
        
    }

    get power(): string{
        //return powers.find( power => power.id  === this.powerId )!.desc || 'no found' //el ! indica que siempre vendrá un valor
        return powers.find( power => power.id  === this.powerId )?.desc || 'no found'
    }

}

export class Hero2 {
    
}

export const PI = 3.1416
export const miNombre = 'eCituk Caamal'
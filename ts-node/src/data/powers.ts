export interface Power {
    id: number,
    desc: string,

}

const powers: Power[] = [
    {
        id: 1,
        desc: 'Money'
    },
    {
        id: 2,
        desc: 'Drugs'
    }
]

export default powers //los exports por defecto al importarlos se puede ponerles cualquier nombre
export class BurgerModel{
    public constructor(
        public id?:number,
        public burgerType?:string,
        public price?:number,
        // --------------------------------sides
        public fries?:any,
        public mashedPotatos?:any,
        public friedOnions?:any,
        // --------------------------------drinks
        public coke?:any,
        public sprite?:any,
        public fanta?:any){
    }
}
export class BurgerModel{
    public constructor(
        public id?:number,
        public burgerType?:string,
        public price?:number,
        public Onions?:any,
        public Bacon?:any,
        public Mushrooms?:any,
        public ChiliPepers?:any,
        public BlueCheese?:any,
        public Egg?:any,
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
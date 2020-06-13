export class NewMealModel{
    public constructor(
        public id?:string,
        public burgerName:string = '',
        public burgerPrice:number = null,
        public pickedToppings:any[] = [],
        public pickedDrink:string = '',
        public pickedSides:string = ''){
    }
}
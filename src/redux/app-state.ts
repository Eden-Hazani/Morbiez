import { BurgerModel } from "../models/burgerModel";
import { ToppingModel } from "../models/toppingModule";


export class AppState{
    public burger: BurgerModel[];
    public toppings: ToppingModel[];
    public constructor(){
        this.burger = [];
        this.toppings = [];
    }
}

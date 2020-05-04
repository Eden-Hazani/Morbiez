import { BurgerModel } from "../models/burgerModel";
import { ToppingModel } from "../models/toppingModule";
import { SideDishModel } from "../models/sideDishModel";


export class AppState{
    public burger: BurgerModel[];
    public toppings: ToppingModel[];
    public sideDish: SideDishModel[];
    public constructor(){
        this.burger = [];
        this.toppings = [];
        this.sideDish = [];
    }
}

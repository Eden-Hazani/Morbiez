import { SideDishModel } from "../models/sideDishModel";
import { NewMealModel } from "../models/newMealModel";
import { BurgerModel } from "../models/burgerModel";
import { ToppingModel } from "../models/toppingModule";
import { DrinksModel } from "../models/drinksModel";
import { SidesModel } from "../models/sidesModel";
import { BurgerVsToppingModel } from "../models/burgerVsToppingModel";
import { NewSideDishModel } from "../models/newSideDishModel";
import { SendOrderModel } from "../models/sendOrderModel";


export class AppState{
    public meal: NewMealModel[];
    public sideDish: SideDishModel[];
    public newSideDish: NewSideDishModel[]
    public burger: BurgerModel[];
    public toppings: ToppingModel[];
    public drinks: DrinksModel[];
    public sides: SidesModel[];
    public burgerVsTopping: BurgerVsToppingModel[];
    public sendOrder: SendOrderModel[];
   public constructor(){
        this.meal = [];
        this.newSideDish = [];
        this.sideDish = [];
        this.burger = [];
        this.toppings = [];
        this.drinks = [];
        this.burgerVsTopping = [];
        this.sendOrder = [];
    }
}

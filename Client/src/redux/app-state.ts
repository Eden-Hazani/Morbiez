import { SideDishModel } from "../models/sideDishModel";
import { NewMealModel } from "../models/newMealModel";


export class AppState{
    public meal: NewMealModel[];
    public sideDish: SideDishModel[];
   public constructor(){
        this.meal = [];
        this.sideDish = [];
    }
}

import { BurgerModel } from "../models/burgerModel";


export class AppState{
    public burger: BurgerModel[];
    public constructor(){
        this.burger = [];
    }
}

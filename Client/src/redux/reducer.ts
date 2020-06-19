import { AppState } from "./app-state";
import { Action } from "./action";
import { ActionType } from "./action-type";

export function reduce(oldAppState:AppState,action:Action): AppState{

    const newAppState = {...oldAppState} // duplicate the old state into the new state
    switch(action.type){
        case ActionType.GetAllBurger:
            newAppState.burger = action.payload;
            break;
        case ActionType.GetAllBurgerVsTopping:
            newAppState.burgerVsTopping = action.payload;
            break;
        case ActionType.GetAllDrinks:
            newAppState.drinks = action.payload;
            break;
        case ActionType.GetAllSideDish:
            newAppState.sideDish = action.payload;
            break
        case ActionType.GetAllSides:
            newAppState.sides = action.payload;
            break;
        case ActionType.GetAllToppings:
            newAppState.toppings = action.payload;
            break;
        case ActionType.AddBurger:
            newAppState.meal.push(action.payload);
            break;
        case ActionType.SendInformationToOrder:
            newAppState.sendOrder.push(action.payload)
            console.log(newAppState.sendOrder)
            break;
        case ActionType.SendMealItemsToOrder:
            newAppState.sendOrder.push(action.payload)
            break;
        case ActionType.SendSideDishItemsToOrder:
            newAppState.sendOrder.push(action.payload)
            break;
        case ActionType.DeleteBurger:
            let a = newAppState.meal.filter(item => {
                    return item.id !== action.payload                
                })
            newAppState.meal = []
            for(let item of a){
                newAppState.meal.push(item)
            }
            break;
            
        case ActionType.AddSideDish:
            newAppState.newSideDish.push(action.payload);
            break;

        case ActionType.DeleteSideDish:
            let sideDish = newAppState.newSideDish.filter(item =>{
                return item.id !== action.payload
            })
            newAppState.newSideDish = [];
            for(let item of sideDish){
                newAppState.newSideDish.push(item)
            }
            break;
        case ActionType.ResetStore:
            newAppState.newSideDish = [];
            newAppState.meal = [];
            newAppState.sendOrder = [];
            break;
        default: break;
    }
    return newAppState
}



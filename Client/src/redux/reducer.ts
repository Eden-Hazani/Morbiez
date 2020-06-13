import { AppState } from "./app-state";
import { Action } from "./action";
import { ActionType } from "./action-type";

export function reduce(oldAppState:AppState,action:Action): AppState{

    const newAppState = {...oldAppState} // duplicate the old state into the new state
    switch(action.type){
        case ActionType.GetAllBurger:
            newAppState.meal = action.payload;
            break;

        case ActionType.AddBurger:
            newAppState.meal.push(action.payload);

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
            newAppState.sideDish.push(action.payload);
            break;

        case ActionType.DeleteSideDish:
            let sideDish = newAppState.sideDish.filter(item =>{
                return item.sideDishId !== +action.payload
            })
            newAppState.sideDish = [];
            for(let item of sideDish){
                newAppState.sideDish.push(item)
            }
            break
        default: break;
    }
    return newAppState
}



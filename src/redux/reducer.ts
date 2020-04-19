import { AppState } from "./app-state";
import { Action } from "./action";
import { ActionType } from "./action-type";

export function reduce(oldAppState:AppState,action:Action): AppState{

    const newAppState = {...oldAppState} // duplicate the old state into the new state
    switch(action.type){
        case ActionType.GetAllBurger:
            newAppState.burger = action.payload;
            break;
        case ActionType.AddBurger:
            newAppState.burger.push(action.payload);
            break;
        case ActionType.DeleteBurger:
            let a = newAppState.burger.filter(item => {
                    return item.id !== +action.payload                
                })
            newAppState.burger = []
            for(let item of a){
                newAppState.burger.push(item)
            }
            break;
        default: break;
    }
    return newAppState
}



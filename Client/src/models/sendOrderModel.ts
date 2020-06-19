import { CustomerInformationModel } from "./customerInformationModel";
import { NewMealModel } from "./newMealModel";
import { NewSideDishModel } from "./newSideDishModel";

export class SendOrderModel{
    public constructor(
           public customerInfo:CustomerInformationModel,
           public mealInfo:NewMealModel,
           public sideDishInfo:NewSideDishModel
        ){}
}
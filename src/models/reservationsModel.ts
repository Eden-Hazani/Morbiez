export class ReservationsModel{
    public constructor(
        public id?:number,
        public fullName?:string,
        public numberOfPeople?:number,
        public date?:string,
        public timeOfArrivel?:string){
    }
}
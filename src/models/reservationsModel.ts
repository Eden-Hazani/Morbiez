export class ReservationsModel{
    public constructor(
        public id?:number,
        public fullName:string = '',
        public numberOfPeople:string = '',
        public date:string = '',
        public timeOfArrivel:string = ''){
    }
}
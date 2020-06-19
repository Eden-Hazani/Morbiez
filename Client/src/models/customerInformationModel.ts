export class CustomerInformationModel{
    public constructor(
        public firstName?:string,
        public lastName?:string,
        public phoneNumber?:string,
        public email?:string,
        public address?:string,
        public city?:string,
        public zip?:number
        ){}
}
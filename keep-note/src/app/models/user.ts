export interface user  {
    firstName : string,
    lastName : string,
    email : string,
    password :string,
    confirmPassword:string,
    gender : string,
    age : number,
    phoneNo : number,
    address : {
        street : string,
        city : string,
        state :string,
        zipCode : number
    }
}
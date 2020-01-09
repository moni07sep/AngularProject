export interface Iregister{
    FirstName:string;
    LastName:string;
    DOB:string
    MobileNo:number;
    EmailId:string;
    UserLogin :{
        UserName:string;
        Password:string;
    }
}

export interface Ilogin{

    UserLogin :{
        UserName:string;
        Password:string;
    }
}

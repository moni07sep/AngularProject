import { Iregister, Ilogin } from './reg.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({providedIn:"root"})

export class Register{
    public headers;
    private url="http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync";
    private urlLogin="http://mobile.test.acorsociety.com/ideators/api/users/userloginasync";
    constructor(private http:HttpClient ){
        this.headers= new HttpHeaders({
            "Content-Type":"application/json"
        })
    }
    userRegister(data:Iregister){
        return this.http.post(this.url, JSON.stringify(data),{headers:this.headers});

    }
    userLogin(data:Ilogin){
        return this.http.post(this.urlLogin, JSON.stringify(data),{headers:this.headers})
            .pipe(map((item:any)=>{
                if(item && item.UserLogin.JwtToken){
                    localStorage.setItem("currentUser", JSON.stringify(item))
                }else{
                    return item;
                }

            }))

    }
    logout(){
        localStorage.removeItem("currentUser");
    }
}

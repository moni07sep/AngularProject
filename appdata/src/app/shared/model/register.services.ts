
import { routes } from './../../app.routes';
import { Iregister, Ilogin } from './reg.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs'
import { Router} from "@angular/router";

@Injectable({providedIn:"root"})

export class Register{
    public headers;

    private loggedIn :BehaviorSubject<any>;
    public userData :Observable<any>


    private url="http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync";
    private urlLogin="http://mobile.test.acorsociety.com/ideators/api/users/userloginasync";
    constructor(private http:HttpClient , private ro:Router ){
        this.headers= new HttpHeaders({
            "Content-Type":"application/json"
        })

        this.loggedIn=new BehaviorSubject(JSON.parse(localStorage.getItem("currentuser")));
        this.userData = this.loggedIn.asObservable();
    }
    userRegister(data:Iregister){
        return this.http.post(this.url, JSON.stringify(data),{headers:this.headers});

    }
    userLogin(data:Ilogin){
        return this.http.post(this.urlLogin, JSON.stringify(data),{headers:this.headers})
            .pipe(map((item:any)=>{
                if(item && item.UserLogin.JwtToken){
                    localStorage.setItem("currentUser", JSON.stringify(item));
                    this.loggedIn.next(item);
                }else{
                    return item;
                }

            }))

    }
    logout(){
        localStorage.removeItem("currentUser");
        this.loggedIn.next(null);
        this.ro.navigateByUrl("/Login")
    }
}

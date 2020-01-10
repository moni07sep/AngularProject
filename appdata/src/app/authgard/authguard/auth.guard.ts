import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router'

@Injectable({providedIn : "root" })

export class Authguard implements CanActivate{

    constructor(private router: Router){}
    canActivate(){

        let token =localStorage.getItem("currentUser");
        if (!token){
            alert("Plz login first");
            this.router.navigateByUrl("/Login");
        }else{
            return true;
        }

    }



}
import {Component} from '@angular/core';
import { listData } from './listData';
import { laptopData } from './laptopData';
@Component({
    selector:"app-list",
    template:`<h2>{{username}}</h2>
            <ul *ngFor="let mobname of mob">
            <li>{{mobname}}</li></ul>
            <ul *ngFor="let laptopname of laptop">
            <li>{{laptopname}}</li></ul>
    
    `,
    styles:[``]
})
export class listDisplayComponemt{
    public username: string="monika";
    //public mob : string[]=['mob1','mob2','mob3']
    public mob;
    public laptop;
    constructor(private listdata:listData ,laptopdata:laptopData){
        this.mob=listdata.getList();
        this.laptop=laptopdata.getLaptopList();

    }
}
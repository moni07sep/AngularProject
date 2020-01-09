import {Component} from '@angular/core';
@Component({
    selector:"app-list",
    template:`<h2>{{username}}</h2>
            <ul *ngFor="let laptopname of laptop">
            <li>{{mobname}}</li></ul>
    
    `,
    styles:[``]
})
export class laptopDisplayComponemt{
    public username: string="monika";
    public laptop : string[]=['l1','l2','l3']
}
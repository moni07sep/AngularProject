
import { Component } from '@angular/core';
@Component({
    selector: "app-mobile",
    template: `
        <div class="container">
        <div class="row">               
            <div class="col-sm-4" *ngFor="let mob of mobile">
            <div class="col-sm">
            <img src={{mob.imgUrl}} class="img-thumbnail"> <h6>Price: {{mob.price}}</h6>
            </div>
        </div>
        </div>    
    `,
    styles: [`  `]
})
export class MobileComponent {
   
    public mobile = [{
        price: "1000",
        imgUrl: "../assets/img/2.jpg"},

        { price: "2000",
        imgUrl: "../assets/img/mob3.jpg"},

        { price: "3000",
        imgUrl: "../assets/img/2.jpg"},

        { price: "3000",
        imgUrl: "../assets/img/2.jpg"}
    ]
    
    
}

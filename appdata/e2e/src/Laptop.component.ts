
import { Component } from '@angular/core';
@Component({
    selector: "app-laptop",
    template: `
        <div class="container">
        <div class="row">                 
            <div class="col-sm-4" *ngFor="let lapc of laptop">
            <div class="col-sm">
            <img src={{lapc.imgUrl}} class="img-thumbnail"><h6>Price:  {{lapc.price}}</h6>
            </div>
        </div>
        </div>    
    `,
    styles: [`  `]
})
export class LaptopComponent {
   
    public laptop = [{
        price: "1000",
        imgUrl: "../assets/img/mob3.jpg"},

        { price: "2000",
        imgUrl: "../assets/img/mob3.jpg"},

        { price: "3000",
        imgUrl: "../assets/img/mob3.jpg"}
    ]
    
    
}

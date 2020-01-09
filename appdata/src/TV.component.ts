
import { Component } from '@angular/core';
@Component({
    selector: "app-tv",
    template: `
        <div class="container">
        <div class="row">                 
            <div class="col-sm-4" *ngFor="let tv of tvDetails">
            <div class="col-sm">
            <img src={{tv.imgUrl}} class="img-thumbnail"><h6>Price:  {{tv.price}}</h6>
            </div>
        </div>
        </div>    
    `,
    styles: [`  `]
})
export class TVComponent {
   
    public tvDetails = [{
        price: "1000",
        imgUrl: "../assets/img/2.jpg"},

        { price: "2000",
        imgUrl: "../assets/img/2.jpg"},

        { price: "3000",
        imgUrl: "../assets/img/2.jpg"}
    ]
    
    
}

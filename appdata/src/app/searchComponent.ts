import { Component } from '@angular/core';
@Component({
    selector: "app-search",
    template: `<h2>{{username}}</h2>
    <div class="container">
        <div class="row">
        <div class="form-group">
            <label for="">Search</label>
            <input type="text" class="form-control" name="username" placeholder="search"
            [(ngModel)]="username"
          > 
        </div>    
        </div>
        <div class="row">               
            <div class="col-sm-4" *ngFor="let d of data | searchcontent : username ">
            <div class="col-sm">
            <img src={{d.imgUrl}} class="img-thumbnail"> 
            <h6> {{d.price}}</h6>
            <h6> {{d.name}}</h6>
            <h6> {{d.id}}</h6>
            </div>
        </div>
    </div>
    `,
    styles: [``]
})
export class searchComponent {
    public username = "";
    public username1
    ;
    
    public data = [{
            id:1,
            name:"monika",
            price: "1000",
            imgUrl: "../assets/img/mob3.jpg"},

        { 
            id:11,
            name:"monika1",
            price: "2000",
            imgUrl: "../assets/img/mob3.jpg"},

        { 
            id:12,
            name:"monika2",
            price: "3000",
            imgUrl: "../assets/img/mob3.jpg"},

        { 
            id:13,
            name:"monika3",
            price: "3000",
            imgUrl: "../assets/img/mob3.jpg"}
    ]
    
}

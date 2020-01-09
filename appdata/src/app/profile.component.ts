import { Component } from '@angular/core';



@Component({
    selector:"app-profile",
    template:`<h2>{{username}}</h2>
    <div class="container">
        <div class="row">
        
        <button id="male" type="button" class="btn btn-primary">MALE</button>
        <button  id ="female" type="button" class="btn btn-primary">FEMALE</button>
           
        </div>
    </div>
    `,
    styles:[``]
})
export class profileComponent{
    public username: string="PROFILE";
    //public isActive: boolean = true;
   /// public imgUrl: string = "../assets/img/face1.jpg";
   // public imgurl1: string = "../assets/img/face2.jpg";
    // AddColor() {
    //     this.isActive = !this.isActive;
    // }

}
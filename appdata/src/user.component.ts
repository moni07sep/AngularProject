import { Component } from '@angular/core';

@Component({
    selector: "app-user",
    template: `
        <div>
        <img src ="{{imgurl }}">
        </div>
    
    `
})
export  class UserComponent{

    public imgurl ="http://lorempixel.com/400/200/";

}
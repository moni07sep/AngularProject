import { Component } from '@angular/core';

@Component({
    selector:"app-search",
    template:`<h2>{{username}}</h2>
    <div class="container">
        <div class="row">
        <div class="form-group">
            <label for=""></label>
            <input type="text"
            class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Help text</small>
        </div>    
        </div>
    </div>
    `,
    styles:[``]
})
export class searchComponent{
    public username: string="PROFILE";

}
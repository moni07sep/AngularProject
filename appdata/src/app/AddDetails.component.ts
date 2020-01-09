import { Idetails } from './shared/model/details';
import { Component } from '@angular/core';


@Component({
    selector: "app-add-details",
    template: `
        <div class="container">
        <div class="row">
        <div class="col-md-12">      
            <app-details  [details]="addDetails" (Event)="Addnewdetails($event)"   ></app-details>
            <h1>
              {{name}}
              {{id}}
            </h1>
        
            </div>
        </div>    
        </div>
    `,
    styles: [`  `]
})
export class AddDetailsComponent {

    public addDetails:Idetails[] = [
                                {id:1,name:"java"},
                                {id:2,name:"php"},
                                {id:3,name:"angular"},
                            ]
    //public id:number;
    //public name: string;
    public Addnewdetails(item:Idetails) { 
        console.log(item);       
        this.addDetails.push(item);       
    }                        
}
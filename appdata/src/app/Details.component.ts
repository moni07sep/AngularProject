import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { Idetails } from './shared/model/details';

@Component({
    selector: "app-details",
    template: `
        <div class="container">
        <div class="row">
        <div class="col-md-12">
            <ul *ngFor="let d of details">
            <li>{{d.id}}</li>
            <li>{{d.name}}</li>
            </ul>

            {{details}}
            <input type="text" class="form-control" placeholder="id"
            #id
            >
            <input type="text" class="form-control" placeholder="name"
            #name
            >
            <button type="button" class="btn btn-danger btn-md"
            (click)="Add(id,name)"
            >CLiCk</button>
            

        </div>
        </div>    
        </div>
    `,
    styles: [`  `]
})
export class DetailsComponent {
    
    @Input() public details:Idetails[];

    @Output() public Event = new EventEmitter<Idetails>();
    
    Add(id,name) {
        this.Event.emit({id:id.value ,name:name.value});
        id.value="";
        name.value="";

    }
    
}
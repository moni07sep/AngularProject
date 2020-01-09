
import { Component } from '@angular/core';
@Component({
    selector: "app-dd",
    template: `
        <div class="form-group">
        <label for=""></label>
        <select class="form-control col-sm-3 dropdown-toggle" name="" id="">
            
        <option><ng-content select=".head"></ng-content> </option>
        <option><ng-content select=".body"></ng-content></option>
        </select>
        </div>
        

    `,
    styles: [` 
    
       `]
})
export class ddComponent {
   
    
    
    
}

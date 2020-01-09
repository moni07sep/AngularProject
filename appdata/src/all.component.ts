
import { Component } from '@angular/core';
@Component({
    selector: "app-all",
    template: `
        <div class="container">
        <div class="row">
        <div class="col-sm-4" style="background-color:lavender;">
        <div >
            <button type="button" class="btn btn-info btn-md"
            (click)="changeMenu='mobile'">
                Mobile
            </button>
        </div>         
         <div>
            <button type="button" class="btn btn-info btn-md"
            (click)="changeMenu='tv'">
                TV
            </button>
        </div>
        <div>
            <button type="button" class="btn btn-info btn-md"
            (click)="changeMenu='laptop'">
                Laptop
            </button>
        </div>
        </div>
        <div class="col-sm-8" style="background-color:lavenderblush;">
        <div>
         <div
          *ngIf="changeMenu"
         [ngSwitch]="changeMenu">
          <h2 *ngSwitchCase="'mobile'">Mobile <app-mobile></app-mobile></h2>
          <h2 *ngSwitchCase="'tv'">TV <app-tv></app-tv></h2>
          <h2 *ngSwitchCase="'laptop'">LAPTOP <app-laptop></app-laptop></h2>
          <h2 *ngSwitchDefault>NOT FOUND ANYTHING </h2>
         </div>
         </div>
        </div>
      </div>
    `,
    styles: [`  `]
})
export class AllComponent {

    public changeMenu;
   
    
    
}

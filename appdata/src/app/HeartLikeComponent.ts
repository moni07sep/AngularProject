import { Component,Input } from '@angular/core';
@Component({
    selector: "app-heartlike",
    template: `
        <div class="container">
        <div class="row">

            <h1>Like {{heartlike}} </h1>
        </div>    
        </div>
    `,
    styles: [`
    `]
})
export class HeartLikeComponent {
    @Input() public heartlike: number;
    
}
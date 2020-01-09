import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: "usercontent"
})

export class Userpipe implements PipeTransform{

    transform(val ,arg){
        if (arg === undefined) {return val;}
        if (arg == true){
           // val.substring(0 ,4)           
            return val;
           
        }

}
}
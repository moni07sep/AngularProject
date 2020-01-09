import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"searchcontent"
})

export class searchpipe implements PipeTransform {
    
    transform(val:any[], arg:any ) {
        
        return val.filter(item=>item.name.toLowerCase().includes(arg.toLowerCase()))  
    };
}
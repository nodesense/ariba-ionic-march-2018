import {Pipe,
        PipeTransform } from '@angular/core';

@Pipe({
    name: "power"
})
export class PowerPipe implements PipeTransform {

    // called by pipes
    // {{ 2 |  power }} (transform (2, 1 (default))
    // {{ 3 | power: 2 }} (transform(3, ))
    transform(value: number, exponent: number = 1){
        return Math.pow(value, exponent);
    }
}


 
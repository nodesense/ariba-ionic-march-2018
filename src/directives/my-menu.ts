import {Directive, 
        Renderer2,
        ElementRef,
        HostListener
    } from '@angular/core';

import {MenuController} from "ionic-angular";

// Decorator
@Directive({
    selector: '[myMenu]', // [] mandatory
})
export class MyMenu {
    constructor(private renderer: Renderer2, 
                private menuController: MenuController) {
        
    }

    // angular, callback, lifecycle
    // called after view initialized
    ngOnInit() {
        console.log("MyMenu init");
    }

    //TODO: on click, toggle the menu
    // called automatically
    @HostListener('click')
    onClick2() {
        console.log("click on host element");
        this.menuController.toggle();
    }
}
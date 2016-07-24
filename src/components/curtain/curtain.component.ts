import './curtain.scss'
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'curtain',
    template: `<div class="curtain">
                <h1>Curtain is here</h1>
                <a [routerLink]="['./login']">Login</a>
                <a [routerLink]="['./reminder']">Reminder</a>
                <router-outlet></router-outlet>
               </div>`,
    directives: [ROUTER_DIRECTIVES]
})
export class Curtain {
    fullName: string;

    getFullName(){
        return this.fullName;
    }
}

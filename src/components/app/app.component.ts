import './app.scss'
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'app',
    template: `<div><h1>This is Angular 2 Typescript Webpack App !!!</h1>
                    <a [routerLink]="['/curtain']">curtain</a>
                    <router-outlet></router-outlet>
                </div>`,
    directives: [ROUTER_DIRECTIVES]
})
export class App {
    fullName:string;

    getFullName() {
        return this.fullName;
    }
}

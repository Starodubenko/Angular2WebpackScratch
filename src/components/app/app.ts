import './app.scss'
import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Login} from '../login/login';
let login = new Login('L', 'ogi', 'n');


@Component({
    selector: 'app',
    template: `<div><h1>This is Angular 2 Typescript Webpack App !!! {{fullName}}</h1></div>`,
    directives: [RouterOutlet, RouterLink]
})
export class App {
    fullName:string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    getFullName() {
        return this.fullName;
    }
}

let app = new App('A', 'p', 'p');

// alert(app.getFullName());

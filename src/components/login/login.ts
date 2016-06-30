import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';


@Component({
    selector: 'login',
    template: `
        <div class="admin-page">
            <aside class="left-bar"></aside>
            <div class="exhibition-wall"></div>
            <aside class="right-bar"></aside>
        </div>`,
    // directives: [RouterOutlet, RouterLink]
})
export class Login {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    getFullName(){
        return this.fullName;
    }
}

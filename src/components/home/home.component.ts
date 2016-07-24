import './home.scss'
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'home',
    template: `
        <div class="home-page">
            Welcome to new Application {{appName}}!!!
        </div>`,
    directives: [ROUTER_DIRECTIVES]
})
export class Home {
    fullName: string = "Photo Gallery !!!";

}

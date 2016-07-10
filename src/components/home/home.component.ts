import './home.scss'
import {Component} from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <div class="home-page">
            Welcome to new Application {{appName}}!!!
        </div>`,
    directives: []
})
export class Home {
    fullName: string = "Photo Gallery !!!";

}

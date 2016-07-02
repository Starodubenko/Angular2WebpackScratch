import './login.scss'
import {Component} from '@angular/core';

@Component({
    selector: 'login',
    template: `
        <div class="admin-page">
            <aside class="left-bar"></aside>
            <div class="exhibition-wall"></div>
            <aside class="right-bar"></aside>
        </div>`,
    directives: []
})
export class Login {
    fullName: string;

    getFullName(){
        return this.fullName;
    }
}

import './login.scss'
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'login',
    template:
        `<div class="login">
            <h1>This is login</h1>
            <label for=""></label>
            <input type="text">
            <label for=""></label>
            <input type="text">
            <input type="submit">
         </div>`,
    directives: [ROUTER_DIRECTIVES]
})
export class Login {
    fullName: string;

    getFullName(){
        return this.fullName;
    }
}

// `<div class="admin-page">
//             <aside class="left-bar"></aside>
//             <div class="exhibition-wall"></div>
//             <aside class="right-bar"></aside>
//          </div>`
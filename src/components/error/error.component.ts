import './error.scss'
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'error',
    template: `
        <div class="admin-page">
            <aside class="left-bar"></aside>
            <div class="exhibition-wall"></div>
            <aside class="right-bar"></aside>
        </div>`,
    directives: [ROUTER_DIRECTIVES]
})
export class Error {
    fullName: string;

    getFullName(){
        return this.fullName;
    }
}

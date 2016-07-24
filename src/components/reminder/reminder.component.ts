import './reminder.scss'
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'reminder',
    template: `
        <div class="reminder">
            <h1>This is reminder</h1>
        </div>`,
    directives: [ROUTER_DIRECTIVES]
})
export class Reminder {
    fullName: string;

    getFullName(){
        return this.fullName;
    }
}

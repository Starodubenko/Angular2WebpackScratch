import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import {bootstrap} from '@angular/platform-browser-dynamic'
import {App} from './components/app/app.component'
import {APP_ROUTER_PROVIDERS} from "./router";
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";


bootstrap(App, [
    APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}])
    .catch(err => console.error(err));
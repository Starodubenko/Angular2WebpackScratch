import { provideRouter, RouterConfig }  from '@angular/router';
import {Login} from "./components/login/login";


const routes: RouterConfig = [
    {path: '', component: Login},
    {path: 'login', component: Login}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
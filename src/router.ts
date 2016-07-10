import { provideRouter, RouterConfig }  from '@angular/router';
import {Login} from "./components/login/login.component";
import {Home} from "./components/home/home.component";


const routes: RouterConfig = [
    {path: '', component: Home},
    {path: 'login', component: Login}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
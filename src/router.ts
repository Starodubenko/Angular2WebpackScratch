import { provideRouter, RouterConfig}  from '@angular/router';
import {Home} from "./components/home/home.component";
import {curtainRoutes} from "./components/curtain/curtain.router";


const routes: RouterConfig = [
    {path: '', component: Home},
    ...curtainRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

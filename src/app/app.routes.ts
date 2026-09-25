import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Login } from './pages/login/login';
import { SobreOProjeto } from './pages/sobre-o-projeto/sobre-o-projeto';

export const routes: Routes = [
    {path: "", redirectTo: "Login", pathMatch: "full"},
    {path: "home", component: Home},
    {path: "dashboard", component: Dashboard},
    {path: "sobre-o-projeto", component: SobreOProjeto},
    {path: "login", component: Login}
];

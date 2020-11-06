import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    }
];

export const LoginRoutes = RouterModule.forChild(routes);
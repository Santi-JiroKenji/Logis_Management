import { ProvidersMainComponent } from './providers-main/providers-main.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ProvidersMainComponent,
    }
];
export const ProvidersRoutes = RouterModule.forChild(routes);
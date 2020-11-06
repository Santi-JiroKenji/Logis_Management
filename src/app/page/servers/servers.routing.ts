import { Routes, RouterModule } from '@angular/router'
import { ServersMainComponent } from './servers-main/servers-main.component';
import { ServersInformationComponent } from './servers-information/servers-information.component';

const routes: Routes = [
    {
        path: '',
        component: ServersMainComponent,
    },
    {
        path: 'view/:id',
        component: ServersInformationComponent,
    },
];
export const ServersRoutes = RouterModule.forChild(routes);
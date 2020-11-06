import { Routes, RouterModule } from '@angular/router';
import { MonitorListComponent } from './monitor-list/monitor-list.component';

const routes: Routes = [
    {
        path: '',
        component: MonitorListComponent,
    }
];

export const MonitorRoutes = RouterModule.forChild(routes);
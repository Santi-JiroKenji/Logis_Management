import { Routes, RouterModule } from '@angular/router';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';

const routes: Routes = [
    {
        path: '',
        component: ConsumerListComponent,
    },
    {
        path: 'add',
        component: ConsumerFormComponent,
    },
    {
        path: 'edit/:id',
        component: ConsumerFormComponent,
    }
];

export const ConsumerRoutes = RouterModule.forChild(routes);
import { PackagesMainComponent } from './packages-main/packages-main.component';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        component: PackagesMainComponent,
    }
];
export const PackagesRoutes = RouterModule.forChild(routes);
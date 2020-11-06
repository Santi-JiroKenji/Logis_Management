import { DialogViewModule } from './../../core/base-component/dialog-view/dialog-view.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PackagesMainComponent } from './packages-main/packages-main.component';
import { PackagesRoutes } from './packages.routing';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { DialogFormModule } from 'src/app/core/base-component/dialog-form/dialog-form.module';

@NgModule({
    imports: [
        CommonModule,
        PackagesRoutes,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        DialogFormModule,
        DialogViewModule
    ],
    declarations: [
        PackagesMainComponent,
    ]
})
export class PackagesModule { }
import { DialogFormModule } from './../../core/base-component/dialog-form/dialog-form.module';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServersMainComponent } from './servers-main/servers-main.component';
import { ServersInformationComponent } from './servers-information/servers-information.component';
import { ServersRoutes } from './servers.routing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        ServersRoutes,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        DialogFormModule
    ],
    declarations: [
        ServersMainComponent,
        ServersInformationComponent
    ]
})
export class ServersModule { }
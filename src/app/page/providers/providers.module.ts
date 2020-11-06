import { DialogViewModule } from './../../core/base-component/dialog-view/dialog-view.module';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ProvidersRoutes } from './providers.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ProvidersMainComponent } from './providers-main/providers-main.component';
import { DialogFormModule } from 'src/app/core/base-component/dialog-form/dialog-form.module';

@NgModule({
    imports: [
        CommonModule,
        ProvidersRoutes,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        DialogViewModule,
        DialogFormModule
    ],
    declarations: [
        ProvidersMainComponent,
    ]
})

export class ProvidersModule { }
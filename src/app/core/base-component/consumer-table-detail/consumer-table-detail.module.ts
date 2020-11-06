import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerTableDetailComponent } from './consumer-table-detail.component';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatPaginatorModule,
        MatTableModule
    ],
    declarations: [
        ConsumerTableDetailComponent,
    ],
    exports: [
        ConsumerTableDetailComponent,
    ]
})
export class ConsumerTableDetailModule { }
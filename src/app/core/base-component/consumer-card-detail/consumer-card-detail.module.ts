import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerCardDetailComponent } from './consumer-card-detail.component';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    declarations: [
        ConsumerCardDetailComponent,
    ],
    exports: [
        ConsumerCardDetailComponent,
    ]
})
export class ConsumerCardDetailModule { }
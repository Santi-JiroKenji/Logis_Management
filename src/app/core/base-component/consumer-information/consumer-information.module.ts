import { ConsumerInformationComponent } from './consumer-information.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    declarations: [
        ConsumerInformationComponent,
    ],
    exports: [
        ConsumerInformationComponent,
    ]
})
export class ConsumerInformationModule { }
import { MatDialogModule } from '@angular/material/dialog';
import { PackagesDataComponent } from './packages-data.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    declarations: [
        PackagesDataComponent
    ],
    exports: [
        PackagesDataComponent,
    ]
})
export class PackagesDataModule { }
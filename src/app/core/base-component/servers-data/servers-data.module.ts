import { ServersDataComponent } from './servers-data.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule
    ],
    declarations: [
        ServersDataComponent
    ],
    exports: [
        ServersDataComponent,
    ]
})
export class ServersDataModule { }
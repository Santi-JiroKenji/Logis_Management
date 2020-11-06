import { PackagesDataModule } from './../packages-data/packages-data.module';
import { PackagesSelectDialogComponent } from './packages-select-dialog/packages-select-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConsumerInformationModule } from './../consumer-information/consumer-information.module';
import { ServersDataModule } from './../servers-data/servers-data.module';
import { MatTableModule } from '@angular/material/table';
import { ServersSelectDialogComponent } from './servers-select-dialog/servers-select-dialog.component';
import { ViewConsumerDialogComponent } from './view-consumer-dialog/view-consumer-dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        ConsumerInformationModule,
        ServersDataModule,
        PackagesDataModule
    ],
    declarations: [
        ServersSelectDialogComponent,
        ViewConsumerDialogComponent,
        PackagesSelectDialogComponent
    ],
    exports: [
        ServersSelectDialogComponent,
        ViewConsumerDialogComponent,
        PackagesSelectDialogComponent
    ],
    entryComponents: [
        ServersSelectDialogComponent,
        ViewConsumerDialogComponent,
        PackagesSelectDialogComponent
    ],
})
export class DialogSelectModule {
}

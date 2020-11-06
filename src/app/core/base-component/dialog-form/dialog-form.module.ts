import { PackageFormDialogComponent } from './package-form-dialog/package-form-dialog.component';
import { ProviderFormDialogComponent } from './provider-form-dialog/provider-form-dialog.component';
import { ServersFormDialogComponent } from './servers-form-dialog/servers-form-dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatCheckboxModule
    ],
    declarations: [
        ServersFormDialogComponent,
        ProviderFormDialogComponent,
        PackageFormDialogComponent
    ],
    exports: [
        ServersFormDialogComponent,
        ProviderFormDialogComponent,
        PackageFormDialogComponent
    ],
    entryComponents: [
        ServersFormDialogComponent,
        ProviderFormDialogComponent,
        PackageFormDialogComponent
    ],
})
export class DialogFormModule {
}
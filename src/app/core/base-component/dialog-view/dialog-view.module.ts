import { PackagesDialogViewComponent } from './packages-dialog-view/packages-dialog-view.component';
import { ProvidersDialogViewComponent } from './providers-dialog-view/providers-dialog-view.component';
import { ProvidersModule } from './../../../page/providers/providers.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        ProvidersDialogViewComponent,
        PackagesDialogViewComponent
    ],
    declarations: [
        ProvidersDialogViewComponent,
        PackagesDialogViewComponent
    ],
    entryComponents: [
        ProvidersDialogViewComponent,
        PackagesDialogViewComponent
    ]
})

export class DialogViewModule { }
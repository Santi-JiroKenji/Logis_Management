import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { LoginRoutes } from './login.routing';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutes
    ],
    declarations: [
        LoginComponent,
    ]
})

export class LoginModule { }
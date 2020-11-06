import { HeaderNavbarModule } from './../header-navbar/header-navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponentComponent } from './main-layout-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HeaderNavbarModule,
    RouterModule
  ],
  declarations: [
    MainLayoutComponentComponent
  ]
})
export class MainLayoutComponentModule { }

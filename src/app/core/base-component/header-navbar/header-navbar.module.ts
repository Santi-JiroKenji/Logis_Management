import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavbarComponent } from './header-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [
    HeaderNavbarComponent
  ],
  exports: [
    HeaderNavbarComponent
  ]
})
export class HeaderNavbarModule { }

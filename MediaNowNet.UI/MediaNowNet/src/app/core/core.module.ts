import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent, NotFoundComponent } from './components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthButtonsComponent } from './components/header/auth-buttons/auth-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AuthButtonsComponent
  ],
  providers: [],
})
export class CoreModule { }

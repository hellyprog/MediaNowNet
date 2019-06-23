import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent, NotFoundComponent } from './components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AboutComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AboutComponent
  ],
  providers: [/*UserService*/],
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent, NotFoundComponent } from './components';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/header/navigation/navigation.component';

@NgModule({
  imports: [
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
    NavigationComponent
  ],
  providers: [],
})
export class CoreModule { }

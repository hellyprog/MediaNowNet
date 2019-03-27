import { NgModule } from '@angular/core';

import { HeaderComponent, FooterComponent } from './layout';

@NgModule({
  imports: [],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
})
export class SharedModule { }

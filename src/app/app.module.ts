import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToursComponent } from './component/tours/tours.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToursComponent
  ],
  imports: [
    BrowserModule,
  
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

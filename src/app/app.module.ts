import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToursComponent } from './component/tours/tours.component';
import { HeaderComponent } from './component/header/header.component';
import { NewsComponent } from './component/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToursComponent,
    HeaderComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
  
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

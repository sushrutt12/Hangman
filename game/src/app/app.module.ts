import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Ng2Webstorage} from 'ngx-webstorage';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,Ng2Webstorage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

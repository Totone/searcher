import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <- import NgModel

import { AppComponent } from './app.component';
import { InputPropsComponent } from './input-props/input-props.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPropsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

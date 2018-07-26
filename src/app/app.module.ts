import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SwHeaderModule } from './core/header/sw-header.module';
import { SwPeopleModule } from './features/sw-people/sw-people.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SwHeaderModule, SwPeopleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

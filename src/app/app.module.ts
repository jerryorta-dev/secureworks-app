import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SwHeaderModule } from './core/header/sw-header.module';
import { SwPersonalModule } from './features/sw-personal/sw-personal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SwHeaderModule,
    SwPersonalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

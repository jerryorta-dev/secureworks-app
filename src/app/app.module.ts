import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SwHeaderModule } from './core/header/sw-header.module';
import { SwFriendsModule } from './features/sw-friends/sw-friends.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SwHeaderModule,
    SwFriendsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

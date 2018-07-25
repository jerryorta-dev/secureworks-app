import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwFriendsComponent } from './sw-friends.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SwFriendsComponent],
  exports: [SwFriendsComponent]
})
export class SwFriendsModule { }

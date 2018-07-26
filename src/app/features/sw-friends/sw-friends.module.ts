import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwFriendsComponent } from './sw-friends.component';
import { SwFriendsFormComponent } from './sw-friends-form/sw-friends-form.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [SwFriendsComponent, SwFriendsFormComponent],
  exports: [SwFriendsComponent]
})
export class SwFriendsModule { }

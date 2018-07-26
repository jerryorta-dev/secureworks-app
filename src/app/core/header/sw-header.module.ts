import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { SwHeaderComponent } from './sw-header.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: [SwHeaderComponent],
  exports: [SwHeaderComponent]
})
export class SwHeaderModule { }

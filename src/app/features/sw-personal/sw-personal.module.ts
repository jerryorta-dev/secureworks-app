import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwPersonalStoreService } from './store/sw-personal-store.service';
import { SwPersonalComponent } from './sw-personal.component';
import { SwPersonalFormComponent } from './sw-personal-form/sw-personal-form.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    SwPersonalStoreService,
  ],
  declarations: [SwPersonalComponent, SwPersonalFormComponent],
  exports: [SwPersonalComponent]
})
export class SwPersonalModule { }

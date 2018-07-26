import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwPersonalStoreService } from './store/sw-personal-store.service';
import { SwPeopleComponent } from './sw-people.component';
import { SwPersonalFormComponent } from './sw-personal-form/sw-personal-form.component';
import { SwChartContainerComponent } from './sw-chart-container/sw-chart-container.component';
import { SwChartComponent } from './sw-chart-container/sw-chart/sw-chart.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [SwPersonalStoreService],
  declarations: [
    SwPeopleComponent,
    SwPersonalFormComponent,
    SwChartContainerComponent,
    SwChartComponent,
  ],
  exports: [SwPeopleComponent],
})
export class SwPeopleModule {}

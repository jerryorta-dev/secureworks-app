import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwPersonalStoreService } from './sw-people/store/sw-personal-store.service';
import { SwGroupBarChartContainerComponent } from './sw-people/sw-group-bar-chart-container/sw-group-bar-chart-container.component';
import { SwGroupBarChartComponent } from './sw-people/sw-group-bar-chart-container/sw-group-bar-chart/sw-group-bar-chart.component';
import { SwPeopleComponent } from './sw-people/sw-people.component';
import { SwPersonalFormComponent } from './sw-people/sw-personal-form/sw-personal-form.component';

@NgModule({
  declarations: [
    SwPeopleComponent,
    SwPersonalFormComponent,
    SwGroupBarChartContainerComponent,
    SwGroupBarChartComponent,
  ],
  providers: [SwPersonalStoreService],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  entryComponents: [
    SwPeopleComponent,
    SwPersonalFormComponent,
    SwGroupBarChartContainerComponent,
    SwGroupBarChartComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customSwPeopleComponent = createCustomElement(SwPeopleComponent, { injector });
    customElements.define('sw-people', customSwPeopleComponent);
  }

  ngDoBootstrap() {}
}

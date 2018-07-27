import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, HostBinding,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartStore, SwPersonalStoreService } from '../store/sw-personal-store.service';
import { SwGroupBarChartComponent } from './sw-group-bar-chart/sw-group-bar-chart.component';

@Component({
  selector: 'sw-group-bar-chart-container',
  templateUrl: './sw-group-bar-chart-container.component.html',
  styleUrls: ['./sw-group-bar-chart-container.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwGroupBarChartContainerComponent implements AfterViewInit, OnDestroy {
  private storeSub: Subscription = Subscription.EMPTY;

  hasChartData = false;

  @ViewChild(SwGroupBarChartComponent) groupGroupBarChart: SwGroupBarChartComponent;

  @HostBinding('class.sw-group-bar-chart-container') bind = true;

  constructor(private storeService: SwPersonalStoreService, private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.storeSub = this.storeService.store.subscribe((result: ChartStore) => {
      if (result.items.length) {
        this.hasChartData = true;
        this.groupGroupBarChart.renderD3(result);
      } else {
        this.hasChartData = false;
      }

      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}

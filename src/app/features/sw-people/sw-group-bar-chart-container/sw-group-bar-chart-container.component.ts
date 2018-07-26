import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
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

  @ViewChild(SwGroupBarChartComponent) groupGroupBarChart: SwGroupBarChartComponent;

  constructor(private storeService: SwPersonalStoreService) {}

  ngAfterViewInit() {
    this.storeSub = this.storeService.store.subscribe((result: ChartStore) => {
      if (result.items.length) {
        this.groupGroupBarChart.renderD3(result);
      }
    });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}

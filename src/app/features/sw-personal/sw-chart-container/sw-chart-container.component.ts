import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartStore, SwPersonalStoreService } from '../store/sw-personal-store.service';
import { SwChartComponent } from './sw-chart/sw-chart.component';

@Component({
  selector: 'sw-chart-container',
  templateUrl: './sw-chart-container.component.html',
  styleUrls: [ './sw-chart-container.component.scss' ],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwChartContainerComponent implements AfterViewInit, OnDestroy {

  private storeSub: Subscription = Subscription.EMPTY;

  @ViewChild('groupChart') groupChart: SwChartComponent;

  constructor(private storeService: SwPersonalStoreService) {
  }

  ngAfterViewInit() {
    this.storeSub = this.storeService.store
      .subscribe((result: ChartStore) => {
        if (result.items.length) {
          this.groupChart.renderD3(result);
        }
      });
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

}

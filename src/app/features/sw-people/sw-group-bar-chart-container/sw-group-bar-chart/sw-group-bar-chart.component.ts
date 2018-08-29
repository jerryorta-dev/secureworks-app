import { ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { ChartStore } from '../../store/sw-personal-store.service';
import { SwD3GroupChartRender, renderD3GroupChart } from './sw-d3-group-chart-render';

@Component({
  selector: 'sw-group-bar-chart',
  templateUrl: './sw-group-bar-chart.component.html',
  styleUrls: ['./sw-group-bar-chart.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwGroupBarChartComponent {
  constructor(private el: ElementRef) {}

  /**
   * Called when component loads and in ngOnChanges
   */
  renderD3(data: ChartStore): void {
    /* istanbul ignore else */
    if (data && data.items && data.items.length) {
      SwD3GroupChartRender.render(this.el.nativeElement, data);
      renderD3GroupChart(this.el.nativeElement, data);
    }
  }
}

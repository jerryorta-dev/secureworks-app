import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { hasValueIn } from '@uiux/cdk/object';
import { ChartStore } from '../../store/sw-personal-store.service';
import { PersonalData } from '../../sw-personal-form/sw-personal-form.component';
import { SwD3GroupChartRender } from './sw-d3-group-chart-render';

@Component({
  selector: 'sw-group-bar-chart',
  templateUrl: './sw-group-bar-chart.component.html',
  styleUrls: ['./sw-group-bar-chart.component.scss'],
  preserveWhitespaces: false,

  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwGroupBarChartComponent {
  private chartSelector = '.sw-bar-chart';

  constructor(private el: ElementRef) {}

  /**
   * Called when component loads and in ngOnChanges
   */
  renderD3(data: ChartStore): void {
    /* istanbul ignore else */
    if (data && data.items && data.items.length) {
      SwD3GroupChartRender.render(this.el.nativeElement, data);
    }
  }
}

import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input, OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { hasValueIn } from '@uiux/cdk/object';
import { ChartStore } from '../../store/sw-personal-store.service';
import { PersonalData } from '../../sw-personal-form/sw-personal-form.component';
import { SwD3GroupChartRender } from './sw-d3-group-chart-render';

@Component({
  selector: 'sw-chart',
  templateUrl: './sw-chart.component.html',
  styleUrls: [ './sw-chart.component.scss' ],
  preserveWhitespaces: false,

  // NOTE: Using ShadowDom
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwChartComponent implements AfterContentInit {
  private chartSelector = '.sw-bar-chart';

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit() {
    this.removeExtraStyles();
  }

  /**
   * Called when component loads and in ngOnChanges
   */
  renderD3(data: ChartStore): void {
    if (data && data.items && data.items.length) {
      SwD3GroupChartRender.render(this.el.nativeElement.shadowRoot, data);
    }
  }

  /**
   * For some reason all of Material's styles are included
   * in the ShadowDom. Remove all styles except what is included
   * in the stylesUrl meta-items.
   */
  removeExtraStyles(): void {
    const styles: HTMLElement[] = this.el.nativeElement.shadowRoot
      .querySelectorAll('style') as HTMLElement[];

    if (styles && styles.length) {
      styles.forEach((r: HTMLElement) => {
        if (r.innerText.indexOf(this.chartSelector) === -1) {
          this.el.nativeElement.shadowRoot.removeChild(r);
        }
      });
    }
  }

  // ngOnChanges(val: SimpleChanges): void {
  //   console.log(val);
  //   if (hasValueIn(val, 'items.currentValue')) {
  //     this.items = val.items.currentValue;
  //     this.renderD3();
  //   }
  // }

}

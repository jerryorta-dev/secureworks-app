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
import { PersonalData } from '../../sw-personal-form/sw-personal-form.component';
import { SwD3Render } from './sw-d3-render';

@Component({
  selector: 'sw-chart',
  templateUrl: './sw-chart.component.html',
  styleUrls: [ './sw-chart.component.scss' ],
  preserveWhitespaces: false,

  // NOTE: Using ShadowDom
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwChartComponent implements AfterContentInit, OnChanges {
  private chartSelector = '.sw-bar-chart';
  @Input('data') data: PersonalData[];

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit() {
    this.removeExtraStyles();
    this.renderD3();
  }

  /**
   * Called when component loads and in ngOnChanges
   */
  renderD3(): void {
    if (this.data) {
      SwD3Render.render(this.el.nativeElement.shadowRoot, this.data);
    }
  }

  /**
   * For some reason all of Material's styles are included
   * in the ShadowDom. Remove all styles except what is included
   * in the stylesUrl meta-data.
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



  ngOnChanges(val: SimpleChanges): void {
    console.log(val);
    if (hasValueIn(val, 'data.currentValue')) {
      this.data = val.data.currentValue;
      this.renderD3();
    }
  }

}

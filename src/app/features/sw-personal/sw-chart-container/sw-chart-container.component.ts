import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwPersonalStoreService } from '../store/sw-personal-store.service';
import { PersonalData } from '../sw-personal-form/sw-personal-form.component';

@Component({
  selector: 'sw-chart-container',
  templateUrl: './sw-chart-container.component.html',
  styleUrls: [ './sw-chart-container.component.scss' ],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwChartContainerComponent implements OnInit {

  data: PersonalData[] = [];

  constructor(private storeService: SwPersonalStoreService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.storeService.store
      .subscribe((result: PersonalData[]) => {
        if (result) {
          this.data = result;
          this.cd.detectChanges();
        }
      });

  }

}

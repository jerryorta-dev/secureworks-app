import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartStore, SwPersonalStoreService } from './store/sw-personal-store.service';
import { PersonalData } from './sw-personal-form/sw-personal-form.component';

@Component({
             selector: 'sw-personal',
             templateUrl: './sw-personal.component.html',
             styleUrls: [ './sw-personal.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class SwPersonalComponent implements OnInit {

  constructor(private storeService: SwPersonalStoreService) {
  }

  ngOnInit() {
    this.storeService.store
      .subscribe((r: ChartStore) => { console.log(r); });
  }

  onSubmit(data: PersonalData): void {
    this.storeService.add(data);
  }

}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SwPersonalStoreService } from './store/sw-personal-store.service';
import { PersonalData } from './sw-personal-form/sw-personal-form.component';

@Component({
  selector: 'sw-personal',
  templateUrl: './sw-personal.component.html',
  styleUrls: ['./sw-personal.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwPersonalComponent {
  constructor(private storeService: SwPersonalStoreService) {}

  onSubmit(data: PersonalData): void {
    this.storeService.add(data);
  }
}

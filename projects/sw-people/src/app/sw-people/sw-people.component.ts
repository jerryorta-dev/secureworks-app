import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SwPersonalStoreService } from './store/sw-personal-store.service';
import { PersonalData } from './sw-personal-form/sw-personal-form.component';

@Component({
  selector: 'sw-people',
  templateUrl: './sw-people.component.html',
  styleUrls: ['./sw-people.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwPeopleComponent {
  constructor(private storeService: SwPersonalStoreService) {}

  onSubmit(data: PersonalData): void {
    this.storeService.add(data);
  }
}

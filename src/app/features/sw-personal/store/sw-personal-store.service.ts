import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonalData } from '../sw-personal-form/sw-personal-form.component';

export interface ChartStore {
  items: PersonalData[];
  columns: string[];
}

const intialStore: ChartStore = {
  items: [],
  columns: ['name', 'age', 'weight', 'friends'],
};

@Injectable({
  providedIn: 'root',
})
export class SwPersonalStoreService {
  // Names of groups appearing in a group chart
  store: BehaviorSubject<ChartStore> = new BehaviorSubject(intialStore);

  add(val: PersonalData): void {
    const _store: ChartStore = this.store.getValue();
    _store.items.push(val);
    this.store.next(_store);
  }

  remove(index: number): void {
    const _store: ChartStore = this.store.getValue();
    // should have items if using this method
    _store.items.splice(index, 1);
    this.store.next(_store);
  }
}

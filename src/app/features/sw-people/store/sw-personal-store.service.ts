import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonalData } from '../sw-personal-form/sw-personal-form.component';

export interface ChartStore {
  items: PersonalData[];
  columns: string[];
}

export const intialChartStore: ChartStore = {
  items: [],
  columns: ['name', 'age', 'weight', 'friends'],
};

@Injectable({
  providedIn: 'root',
})
export class SwPersonalStoreService {
  // Names of groups appearing in a group chart
  store: BehaviorSubject<ChartStore> = new BehaviorSubject(intialChartStore);

  add(val: PersonalData): void {
    const _store: ChartStore = this.store.getValue();
    _store.items.push(val);
    this.store.next(_store);
  }

  /**
   * Not utilized yet. Thought is to
   * have a way to remove items from chart.
   * @param index
   */
  remove(index: number): void {
    const _store: ChartStore = this.store.getValue();
    // should have items if using this method
    _store.items.splice(index, 1);
    this.store.next(_store);
  }

  /**
   * Clear items cache
   */
  clear(): void {
    const _store: ChartStore = this.store.getValue();
    _store.items = [];
    this.store.next(_store);
  }
}

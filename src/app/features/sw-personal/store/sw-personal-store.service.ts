import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonalData } from '../sw-personal-form/sw-personal-form.component';

@Injectable({
  providedIn: 'root',
})
export class SwPersonalStoreService {

  store: BehaviorSubject<PersonalData[]> = new BehaviorSubject(null);

  add( val: PersonalData ): void {
    let _data: PersonalData[] = this.store.getValue();
    _data = _data && _data.length ? _data : [];
    _data.push(val);
    this.store.next(_data);
  }

  remove(index: number): void {
    let _data: PersonalData[] = this.store.getValue();
    // should have data if using this method
    _data = _data && _data.length ? _data : [];
    _data.splice(index, 1);
    this.store.next(_data);
  }

}

import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { PersonalData } from '../sw-personal-form/sw-personal-form.component';

@Injectable({
  providedIn: 'root',
})
export class SwPersonalStoreService {

  // Using ReplaySubject as to not publish
  // undefined or null values like BehaviorSubject
  store: ReplaySubject<PersonalData[]> = new ReplaySubject(1);

}

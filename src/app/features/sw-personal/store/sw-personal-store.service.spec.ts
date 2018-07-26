import { TestBed, inject } from '@angular/core/testing';
import { PersonalData } from '../sw-personal-form/sw-personal-form.component';

import { SwPersonalStoreService } from './sw-personal-store.service';

describe('SwPersonalStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwPersonalStoreService]
    });
  });

  it('should be created', inject([SwPersonalStoreService], (service: SwPersonalStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('should add items', inject([SwPersonalStoreService], (service: SwPersonalStoreService) => {
    let data: PersonalData[];
    service.store.subscribe((result: PersonalData[]) => {
      data = result;
    });

    const test1: PersonalData = {
      name: 'Jimmy Joe',
      age: '32',
      weight: '190',
      friends: '100'
    };

    const test2: PersonalData = {
      name: 'Jane Joe',
      age: '34',
      weight: '114',
      friends: '20'
    };

    const test3: PersonalData = {
      name: 'Johnny Joe',
      age: '40',
      weight: '210',
      friends: '300'
    };

    service.add(test1);
    service.add(test2);
    service.add(test3);

    expect(data[0]).toEqual(jasmine.objectContaining(test1));
    expect(data[1]).toEqual(jasmine.objectContaining(test2));
    expect(data[2]).toEqual(jasmine.objectContaining(test3));
  }));

  it('should remove items', inject([SwPersonalStoreService], (service: SwPersonalStoreService) => {
    let data: PersonalData[];
    service.store.subscribe((result: PersonalData[]) => {
      data = result;
    });

    const test1: PersonalData = {
      name: 'Jimmy Joe',
      age: '32',
      weight: '190',
      friends: '100'
    };

    const test2: PersonalData = {
      name: 'Jane Joe',
      age: '34',
      weight: '114',
      friends: '20'
    };

    const test3: PersonalData = {
      name: 'Johnny Joe',
      age: '40',
      weight: '210',
      friends: '300'
    };

    service.add(test1);
    service.add(test2);
    service.add(test3);

    expect(data[0]).toEqual(jasmine.objectContaining(test1));
    expect(data[1]).toEqual(jasmine.objectContaining(test2));
    expect(data[2]).toEqual(jasmine.objectContaining(test3));

    service.remove(1);

    expect(data[0]).toEqual(jasmine.objectContaining(test1));
    expect(data[1]).toEqual(jasmine.objectContaining(test3));
    expect(data[2]).toBeUndefined();
  }));
});

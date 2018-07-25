import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwFriendsComponent } from './sw-friends.component';

describe('SwFriendsComponent', () => {
  let component: SwFriendsComponent;
  let fixture: ComponentFixture<SwFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

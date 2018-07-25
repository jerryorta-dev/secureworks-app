import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwFriendsFormComponent } from './sw-friends-form.component';

describe('SwFriendsFormComponent', () => {
  let component: SwFriendsFormComponent;
  let fixture: ComponentFixture<SwFriendsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwFriendsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwFriendsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

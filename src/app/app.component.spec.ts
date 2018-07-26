import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SwHeaderModule } from './core/header/sw-header.module';
import { SwPeopleModule } from './features/sw-people/sw-people.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SwHeaderModule, SwPeopleModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

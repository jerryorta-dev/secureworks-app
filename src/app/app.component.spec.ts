import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SwHeaderModule } from './core/header/sw-header.module';
import { SwPersonalModule } from './features/sw-personal/sw-personal.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SwHeaderModule, SwPersonalModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain(
      'SecureWorks Challenge App'
    );
  }));
});

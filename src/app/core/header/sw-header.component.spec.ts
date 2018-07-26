import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material';

import { SwHeaderComponent } from './sw-header.component';

describe('SwHeaderComponent', () => {
  let component: SwHeaderComponent;
  let fixture: ComponentFixture<SwHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule],
      declarations: [SwHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header', async(() => {
    fixture = TestBed.createComponent(SwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain(
      'SecureWorks Challenge App'
    );
  }));
});

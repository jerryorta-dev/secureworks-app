import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PersonalDataForm, SwPersonalFormComponent } from './sw-personal-form.component';

describe('SwPersonalFormComponent', () => {
  let component: SwPersonalFormComponent;
  let fixture: ComponentFixture<SwPersonalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [ SwPersonalFormComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwPersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * this also tests component.buildFormGroup()
   */
  it('should create form', () => {
    expect(component.personalDataForm.controls[ 'name' ]).toBeDefined();
    expect(component.personalDataForm.controls[ 'friends' ]).toBeDefined();
    expect(component.personalDataForm.controls[ 'age' ]).toBeDefined();
    expect(component.personalDataForm.controls[ 'weight' ]).toBeDefined();

    // Form should be invalid by default
    expect(component.personalDataForm.invalid).toBe(true);
  });

  it('should submit personal data', () => {
    component.personalDataForm.controls[ 'name' ].setValue('Jimmy Joe');
    component.personalDataForm.controls[ 'friends' ].setValue('200');
    component.personalDataForm.controls[ 'age' ].setValue('32');
    component.personalDataForm.controls[ 'weight' ].setValue('190');

    let user: PersonalDataForm;
    // Subscribe to the Observable and store the user in a local variable.
    component.onsubmit.subscribe((value) => user = value);

    component.onSubmitHandler();

    expect(user.name).toBe('Jimmy Joe');
    expect(user.friends).toBe('200');
    expect(user.age).toBe('32');
    expect(user.weight).toBe('190');
  });

  it('should error for required name', () => {
    component.personalDataForm.controls[ 'name' ].setValue('Jimmy Joe');
    component.personalDataForm.controls[ 'name' ].setValue('');

    let errors = {};
    const name = component.personalDataForm.controls['name'];
    errors = name.errors || {};
    expect(errors['required']).toBe(true);
  });

  it('should error for name more than 50 characters', () => {
    component.personalDataForm.controls[ 'name' ]
      .setValue( 'john jacob jingleheimer schmidt is your name and my name too');

    let errors = {};
    const name = component.personalDataForm.controls['name'];
    errors = name.errors || {};
    expect(errors['maxlength'].actualLength).toBe(60);
  });

  it('should error for required friends', () => {
    component.personalDataForm.controls[ 'friends' ].setValue('10');
    component.personalDataForm.controls[ 'friends' ].setValue('');

    let errors = {};
    const friends = component.personalDataForm.controls['friends'];
    errors = friends.errors || {};
    expect(errors['required']).toBe(true);
  });

  it('should error if friends are not positive integer', () => {
    component.personalDataForm.controls[ 'friends' ].setValue('-1');

    let errors = {};
    const friends = component.personalDataForm.controls['friends'];
    errors = friends.errors || {};
    expect(errors['positiveInteger'].value).toBe('-1');
  });

  it('should error for required age', () => {
    component.personalDataForm.controls[ 'age' ].setValue('10');
    component.personalDataForm.controls[ 'age' ].setValue('');

    let errors = {};
    const age = component.personalDataForm.controls['age'];
    errors = age.errors || {};
    expect(errors['required']).toBe(true);
  });

  it('should error if age are not positive integer', () => {
    component.personalDataForm.controls[ 'age' ].setValue('-1');

    let errors = {};
    const age = component.personalDataForm.controls['age'];
    errors = age.errors || {};
    expect(errors['positiveInteger'].value).toBe('-1');
  });

  it('should error for required weight', () => {
    component.personalDataForm.controls[ 'weight' ].setValue('10');
    component.personalDataForm.controls[ 'weight' ].setValue('');

    let errors = {};
    const weight = component.personalDataForm.controls['weight'];
    errors = weight.errors || {};
    expect(errors['required']).toBe(true);
  });

  it('should error if age are not positive number', () => {
    component.personalDataForm.controls[ 'weight' ].setValue('-1.2');

    let errors = {};
    const age = component.personalDataForm.controls['weight'];
    errors = age.errors || {};
    expect(errors['positiveNumber'].value).toBe('-1.2');
  });

  it('should not have error if pristine', () => {

    const spy = jasmine.createSpy('hasError').and.returnValue(true);

    const control: any = {
      dirty: false,
      invalid: false,
      hasError: spy,
    };

    const errorCode = 'required';

    const hasError: boolean = component.hasError(control, errorCode);
    expect(hasError).toBe(false);

    // condition short circuit will not allow
    // hasError to be called
    expect(spy).not.toHaveBeenCalled();
  });

  it('should not have error if dirty but valid', () => {

    const spy = jasmine.createSpy('hasError').and.returnValue(true);

    const control: any = {
      dirty: true,
      invalid: false,
      hasError: spy,
    };

    const errorCode = 'required';

    const hasError: boolean = component.hasError(control, errorCode);
    expect(hasError).toBe(false);

    // condition short circuit will not allow
    // hasError to be called
    expect(spy).not.toHaveBeenCalled();
  });

  it('should have error if dirty and invalid', () => {

    const spy = jasmine.createSpy('hasError').and.returnValue(true);

    const control: any = {
      dirty: true,
      invalid: true,
      hasError: spy,
    };

    const errorCode = 'required';

    const hasError: boolean = component.hasError(control, errorCode);
    expect(hasError).toBe(true);

    // condition short circuit will not allow
    // hasError to be called
    expect(spy).toHaveBeenCalledWith('required');
  });
});

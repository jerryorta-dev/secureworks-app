import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { positiveIntegerValidator } from './validators/positive-integer.validator';
import { positiveNumberValidator } from './validators/positive-number.validator';

export interface PersonalDataForm {
  name: string;
  friends: string;
  age: string;
  weight: string;
}

@Component({
             selector: 'sw-friends-form',
             templateUrl: './sw-friends-form.component.html',
             styleUrls: [ './sw-friends-form.component.scss' ],
             preserveWhitespaces: false,
             encapsulation: ViewEncapsulation.None,
             changeDetection: ChangeDetectionStrategy.OnPush,
           })
export class SwFriendsFormComponent implements OnInit {
  personalDataForm: FormGroup;
  appearance = 'outline';

  @Output() onsubmit: EventEmitter<PersonalDataForm> = new EventEmitter();
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.personalDataForm = this.buildFormGroup();
  }


  onSubmitHandler(): void {
    this.onsubmit.next(this.personalDataForm.value);
  }

  buildFormGroup(): FormGroup {

    // Keep validators in array even if there is only one
    // validator for scalability
    const group: any = {
      name: ['', [Validators.required, Validators.maxLength(50)]],
      friends: ['', [Validators.required, positiveIntegerValidator()]],
      age: ['', [Validators.required, positiveIntegerValidator()]],
      weight: ['', [Validators.required, positiveNumberValidator()]],
    };

    return this.fb.group(group);
  }

  isValid( control: any, errorCode: string): boolean {
    return control.dirty && control.invalid && control.hasError(errorCode);
  }

  reset(): void {
    this.personalDataForm.reset(<PersonalDataForm>{
      name: '',
      friends: '',
      age: '',
      weight: ''
    });
  }

}

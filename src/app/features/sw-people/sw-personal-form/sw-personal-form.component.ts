import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, HostBinding,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { positiveIntegerValidator } from './validators/positive-integer.validator';
import { positiveNumberValidator } from './validators/positive-number.validator';

export interface PersonalData {
  name: string;
  age: number;
  weight: number;
  friends: number;
}

@Component({
  selector: 'sw-personal-form',
  templateUrl: './sw-personal-form.component.html',
  styleUrls: ['./sw-personal-form.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwPersonalFormComponent implements OnInit {
  personDataForm: FormGroup;
  appearance = 'outline';

  @Output() onsubmit: EventEmitter<PersonalData> = new EventEmitter();

  /**
   * User to reset form,
   * FormGroups have an issue resetting forms in that they only
   * reset the data, but not the state ( prisitine, untouched, etc ).
   */
  @ViewChild(FormGroupDirective) formRef: FormGroupDirective;

  @HostBinding('class.sw-personal-form') bind = true;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.personDataForm = this.buildFormGroup();
  }

  onSubmitHandler(): void {
    /* istanbul ignore else */
    if (this.personDataForm.valid) {
      // The input fields are typed as text instead
      // of number just for aesthetics -- I don't like how
      // the number suffix control looks or functions
      // for <input type="number" ...

      // Convert number values from String to Number

      // This also works better for chart data
      const payload: PersonalData = {
        name: this.personDataForm.value.name,
        age: Number(this.personDataForm.value.age),
        weight: Number(this.personDataForm.value.weight),
        friends: Number(this.personDataForm.value.friends),
      };

      this.onsubmit.next(payload);
      this.reset();
    }
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

  /**
   *
   * @param control
   * One FromControl from the FormGroup such this.personDataForm.controls['friends'].
   *
   * The FormControl as the 'hasError' method which you pass an 'errorCode'.
   *
   * @param errorCode
   * Property in Validator object which contains the error value ( not
   * error message ).
   *
   * For example, if the 'positiveIntegerValidator' validator returns an error object
   * for the 'friends' FormControl, the object will look like:
   *
   * {
   *   positiveInteger: 10, // <-- sample value
   * }
   *
   */
  hasError(control: AbstractControl, errorCode: string): boolean {
    return control.dirty && control.invalid && control.hasError(errorCode);
  }

  reset(): void {
    // from @ViewChild
    this.formRef.resetForm();
  }
}

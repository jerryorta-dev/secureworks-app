import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
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
  personalDataForm: FormGroup;
  appearance = 'outline';

  @Output() onsubmit: EventEmitter<PersonalData> = new EventEmitter();

  /**
   * User to reset form,
   * FormGroups have an issue resetting forms in that they only
   * reset the data, but not the state ( prisitine, untouched, etc ).
   */
  @ViewChild(FormGroupDirective) formRef: FormGroupDirective;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.personalDataForm = this.buildFormGroup();
  }

  onSubmitHandler(): void {
    if (this.personalDataForm.valid) {
      // The input fields are typed as text instead
      // of number just for aesthetics -- I don't like how
      // the number suffix control looks or functions
      // for <input type="number" ...

      // Convert number values from String to Number

      // This also works better for chart data
      const payload: PersonalData = {
        name: this.personalDataForm.value.name,
        age: Number(this.personalDataForm.value.age),
        weight: Number(this.personalDataForm.value.weight),
        friends: Number(this.personalDataForm.value.friends),
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

  hasError(control: any, errorCode: string): boolean {
    return control.dirty && control.invalid && control.hasError(errorCode);
  }

  reset(): void {
    // from @ViewChild
    this.formRef.resetForm();
  }
}

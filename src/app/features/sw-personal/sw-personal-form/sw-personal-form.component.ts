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
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { positiveIntegerValidator } from './validators/positive-integer.validator';
import { positiveNumberValidator } from './validators/positive-number.validator';

export interface PersonalData {
  name: string;
  age: string;
  weight: string;
  friends: string;
}

@Component({
             selector: 'sw-personal-form',
             templateUrl: './sw-personal-form.component.html',
             styleUrls: [ './sw-personal-form.component.scss' ],
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
  @ViewChild(FormGroupDirective) formRef: FormGroupDirective ;

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.personalDataForm = this.buildFormGroup();
  }

  onSubmitHandler(): void {
    if (this.personalDataForm.valid) {
      this.onsubmit.next(this.personalDataForm.value);
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

  hasError( control: any, errorCode: string): boolean {
    return control.dirty && control.invalid && control.hasError(errorCode);
  }

  reset(): void {
    // from @ViewChild
    this.formRef.resetForm();
  }

}

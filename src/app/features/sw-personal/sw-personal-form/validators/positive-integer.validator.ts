import { AbstractControl, ValidatorFn } from '@angular/forms';
import { isNumber, isInteger } from '@uiux/cdk/number';
import { isOctalString } from './is-octal-string';

export function positiveIntegerValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    if (control.value) {
      const valid = !isOctalString(control.value) &&
        isNumber(control.value) &&
        isInteger(control.value) &&
        (Number(control.value) >= 0);
      return valid ? null : { positiveInteger: { value: control.value } };
    }

    return null;
  };
}



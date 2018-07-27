import { AbstractControl, ValidatorFn } from '@angular/forms';
import { isNumber } from '@uiux/cdk/number';
import { isOctalString } from './is-octal-string';

/**
 * Validates if number is greater than or equal to 0.
 * ( Yes, 0 is not really positive... ).
 *
 * If control is invalid, returns an error object like:
 *
 * {
 *   positiveNumber: 10, // <-- sample value
 * }
 */
export function positiveNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value) {
      const valid =
        !isOctalString(control.value) && isNumber(control.value) && Number(control.value) >= 0;
      return valid ? null : { positiveNumber: { value: control.value } };
    }

    return null;
  };
}

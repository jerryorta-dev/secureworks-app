import { AbstractControl, ValidatorFn } from '@angular/forms';
import { isNumber, isInteger } from '@uiux/cdk/number';
import { isOctalString } from './is-octal-string';

/**
 * Validates if number is greater than or equal to 0.
 * ( Yes, 0 is not really positive... ), and if number
 * is an integer
 *
 * If control is invalid, returns an error object like:
 *
 * {
 *   positiveInteger: 10, // <-- sample value
 * }
 */
export function positiveIntegerValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value) {
      const valid =
        // edge case if user inputs something like 'OxFFAABB'
        !isOctalString(control.value) &&
        isNumber(control.value) &&
        isInteger(control.value) &&
        Number(control.value) >= 0;
      return valid ? null : { positiveInteger: { value: control.value } };
    }

    return null;
  };
}

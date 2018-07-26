import { AbstractControl } from '@angular/forms';
import { positiveNumberValidator } from './positive-number.validator';

describe('Positive Integer Validator', () => {
  const validatorFn = positiveNumberValidator();

  describe('is invalid', () => {
    it('for alpha characters', () => {
      const control = { value: 'abc' };
      const result = validatorFn(control as AbstractControl);

      expect(result.positiveNumber.value).toBe('abc');
    });

    it('for negative number', () => {
      const control = { value: '-1' };
      const result = validatorFn(control as AbstractControl);

      expect(result.positiveNumber.value).toBe('-1');
    });

    it('for negative decimal number', () => {
      const control = { value: '-32.2' };
      const result = validatorFn(control as AbstractControl);

      expect(result.positiveNumber.value).toBe('-32.2');
    });

    it('for octal number', () => {
      const control = { value: '0x123456' };
      const result = validatorFn(control as AbstractControl);

      expect(result.positiveNumber.value).toBe('0x123456');
    });

    it('for hex number', () => {
      const control = { value: '#FFAA00' };
      const result = validatorFn(control as AbstractControl);

      expect(result.positiveNumber.value).toBe('#FFAA00');
    });
  });



  describe('is valid', () => {

    it('for decimal number', () => {
      const control = { value: '32.2' };
      const result = validatorFn(control as AbstractControl);

      expect(result).toBeNull();
    });

    it('for number string', () => {
      const control = { value: '1' };
      const result = validatorFn(control as AbstractControl);

      expect(result).toBeNull();
    });

    /**
     * The validator will pass a string,
     * so this test is a little moot
     */
    it('for number value', () => {
      const control = { value: 1 };
      const result = validatorFn(control as AbstractControl);

      expect(result).toBeNull();
    });

    it('for 0', () => {
      const control = { value: '0' };
      const result = validatorFn(control as AbstractControl);

      expect(result).toBeNull();
    });

  });


});

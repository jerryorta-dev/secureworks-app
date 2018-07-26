import { isOctalString } from './is-octal-string';

describe('is octal', () => {
  it('should not be false for numberic string', () => {
    expect(isOctalString('0123')).toBe(false);
  });

  it('should not be false for alpha string', () => {
    expect(isOctalString('abc')).toBe(false);
  });

  it('should not be false for alphaNumeric string', () => {
    expect(isOctalString('abc123')).toBe(false);
  });

  it('should be false or octal format number', () => {
    expect(isOctalString('abc123')).toBe(false);
  });

  it('should be true or octal format number', () => {
    expect(isOctalString('0x123456')).toBe(true);
  });
});

import Validator from '../app';

describe('validateNumberPhone function:', () => {
  test('should return numbers', () => {
    expect(Validator.validateNumberPhone('8 (927) 000-00-00')).toBe('+79270000000');
    expect(Validator.validateNumberPhone('+7 960 000 00 00')).toBe('+79600000000');
    expect(Validator.validateNumberPhone('+86 000 000 0000')).toBe('+860000000000');
  });
});

class Validator {
  static validateNumberPhone(name) {
    const result = name.replace(/\D/g, '');
    return `+${result.replace(/^8(\d{10})$/, '7$1')}`;
  }
}

export default Validator;

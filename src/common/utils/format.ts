export class Format {
  static cpf(value: string) {
    const number = value.replace(/\D/g, '');
    return number.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

}

/**
 * getCountryCodeLength
 * @param {string} phoneFormat
 * @returns {boolean}
 */
const getCountryCodeLength = (phoneFormat) => {
  return phoneFormat.split('(')[0].length;
};

/**
 * isDigit
 * @param {number} keyCode
 * @returns {boolean}
 */
const isDigit = (keyCode) => keyCode > 47 && keyCode < 58;

/**
 * inputMaskPhone
 * @param {string} inputClassName
 * @param {string} phoneFormat
 *
 * inputClassName = '.some-class-name' (starts with dot)
 *
 * phoneFormat example: '+7 (___) ___-__-__'
 */
export default function inputMaskPhone(inputClassName, phoneFormat) {
  window.addEventListener('DOMContentLoaded', function () {
    [].forEach.call(document.querySelectorAll(inputClassName), function (input) {
      let keyCode;
      const countryCodeLength = getCountryCodeLength(phoneFormat);
      const afterCodeSymbolsLength = ' ('.length;

      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);

        let pos = this.selectionStart;
        if (pos < 3) event.preventDefault();

        let matrix = phoneFormat,
          i = 0,
          def = matrix.replace(/\D/g, ''),
          inputValue = this.value.replace(/\D/g, ''),
          formattedValue = matrix.replace(/[_\d]/g, function (char) {
            return i < inputValue.length ? inputValue.charAt(i++) || def.charAt(i) : char;
          });

        i = formattedValue.indexOf('_');
        if (i != -1) {
          i < countryCodeLength + afterCodeSymbolsLength && (i = countryCodeLength);
          formattedValue = formattedValue.slice(0, i);
        }

        let reg = matrix
          .slice(0, this.value.length)
          .replace(/_+/g, function (a) {
            return '\\d{1,' + a.length + '}';
          })
          .replace(/[+()]/g, '\\$&');

        reg = new RegExp('^' + reg + '$');

        if (!reg.test(this.value) || this.value.length < countryCodeLength || isDigit(keyCode)) {
          this.value = formattedValue;
        }

        if (event.type == 'blur' && this.value.length < countryCodeLength) {
          this.value = '';
        }
      }

      input.addEventListener('input', mask, false);
      input.addEventListener('focus', mask, false);
      input.addEventListener('blur', mask, false);
      input.addEventListener('keydown', mask, false);
    });
  });
}

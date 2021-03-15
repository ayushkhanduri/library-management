const REGEX = {
    ONLY_NUMBER: /^[0-9\b]+$/
}
export class Validators {
    static onlyNumbersRegex = new RegExp(REGEX.ONLY_NUMBER);
    static OnlyNumbers(callback: (value: string) => void , value: string) {
        if (value === '') {
            callback(value);
        }

        if ( Validators.onlyNumbersRegex.test(value) ) {
            callback(value);
        }
    }
}
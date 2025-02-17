import { FormControl } from '@angular/forms';

export class PasswordValidator {
  static cannotContainSpace(formControl: FormControl) {
    if (formControl.value.indexOf(' ') >= 0) {
      return { cannotContainSpace: true }; // { validationRule: value }
    }
    return null; // validation passes
  }
}

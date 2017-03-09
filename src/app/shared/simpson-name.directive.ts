import { Directive } from '@angular/core';
import { FormControl } from '@angular/forms';


export function simpsonNameValidator(c: FormControl) {
  return c.value.lastName == "Simpson" ? null : {
    validateEmail: {
      valid: false
    }
  };
}

@Directive({
  selector: '[appSimpsonName]'
})
export class SimpsonNameDirective {

  constructor() { }

}

import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, OnInit } from '@angular/core';
 
 
@Directive({
  selector: '[dateValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: dateValidatorDirective, multi: true }
  ]
})
export class dateValidatorDirective implements Validator, OnInit {
 
  ngOnInit() {
  }
 
  validate(c: FormControl) {
 
    let day = new Date(c.value).getDay();
 
    if(day === 6) {
      return { 'validDate': true, 'message': 'No puede ser un sábado' }
    }
    if(day === 0) {
        return { 'validDate': true, 'message': 'No puede ser un domingo'}
    }
    return null;
  }
}
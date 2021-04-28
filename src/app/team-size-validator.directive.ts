import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appTeamSizeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TeamSizeValidatorDirective, multi: true }]
})
export class TeamSizeValidatorDirective implements Validator {

  constructor() { }
  // Pass the team Size specifying input directive and directive selector
  @Input("appTeamSizeValidator") teamSize: number;

  validate(control: AbstractControl): ValidationErrors | null {
    let currentValue = control.value;
    let isValid: boolean = currentValue % this.teamSize == 0;

    if(isValid) {
      return null; // valid
    } else {
      return { divisable: { valid: false } }; //
    }
  }
}

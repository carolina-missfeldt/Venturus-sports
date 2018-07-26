import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { User } from '../../../resources/class/bean/user';
import { InputRadioGeneric } from '../../../resources/class/generic/input-generic';
import { InputCheckGeneric } from '../../../resources/class/generic/input-check-generic';
import { Address } from '../../../resources/class/bean/address';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public newUser: User = new User();
  public city: string;
  public checkRide: string;
  public checkDay: Array<string>;
  public radioChoices: Array<InputRadioGeneric> = [];
  public checkboxChoices: Array<InputCheckGeneric> = [];
  constructor() { }

  ngOnInit() {
    this.city = '';
    this.radioChoices = [
      new InputRadioGeneric('Always', 'always'),
      new InputRadioGeneric('Sometimes', 'sometimes'),
      new InputRadioGeneric('Never', 'never')
    ];

    this.checkboxChoices = [
      new InputCheckGeneric('Sun', 'sunday'),
      new InputCheckGeneric('Mon', 'monday'),
      new InputCheckGeneric('Tue', 'tuesday'),
      new InputCheckGeneric('Wed', 'wednesday'),
      new InputCheckGeneric('Thur', 'thursday'),
      new InputCheckGeneric('Fri', 'friday'),
      new InputCheckGeneric('Sat', 'saturday')
    ];
  }

  public save() {
    alert('Cadastro fake');
  }

}

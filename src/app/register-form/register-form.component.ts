import {Component, OnInit} from '@angular/core';
import {FormsModule, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  register = new FormGroup({
    email: new FormControl('',),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    country: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl('')
  });

  onSubmit() {
    console.log(this.register.value);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

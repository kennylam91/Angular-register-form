import {Component, OnInit} from '@angular/core';
import {FormsModule, FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  register = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/[^@]+@[^\.]+\..+/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?(?:[0-9]??).{5,14}[0-9]$/)])
  });

  onSubmit(): void {
    if (this.register.valid) {
      console.log(this.register.controls);
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}

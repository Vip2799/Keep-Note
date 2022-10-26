import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ageValidation } from '../customValidation/ageValidation';
import { emailValidator } from '../customValidation/emailValidator';
import { passwordValidation } from '../customValidation/passwordValidation';
import { phoneValidation } from '../customValidation/phoneValidation';
import { verifyPassword } from '../customValidation/verifyPassword';
import { zipCodeValidators } from '../customValidation/zipCodeValidator';
import { user } from '../models/user';
import { UserService } from '../services/user.service';
// import { passwordValidation } from '../customValidation/passwordValidation';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private user:UserService, private snackbar:MatSnackBar) { }
  registrationForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, emailValidator]],
    password: [null, [Validators.required,verifyPassword]],
    confirmPassword: [null, Validators.required],
    gender: [null, Validators.required],
    age: [null, [Validators.required, ageValidation]],
    phoneNo: [null, [Validators.required, phoneValidation]],
    address: this.fb.group({
      street: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zipCode: [null, [Validators.required, zipCodeValidators]]
    })
  }, { validator: [passwordValidation] });

  

  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
  get gender() {
    return this.registrationForm.get('gender');
  }
  get age() {
    return this.registrationForm.get('age');
  }
  get phoneNo() {
    return this.registrationForm.get('phoneNo');
  }
  get street() {
    return this.registrationForm.get('address')?.get('street');
  }
  get city() {
    return this.registrationForm.get('address')?.get('city');
  }
  get state() {
    return this.registrationForm.get('address')?.get('state');
  }
  get zipCode() {
    return this.registrationForm.get('address')?.get('zipCode');
  }
  // hasUnitNumber = false;
  ngOnInit(): void {
  
  }
 


  onSubmit() {
    // alert("hello")
    this.user.addUser({
      firstName : this.firstName?.value,
      lastName : this.lastName?.value,
      email : this.email?.value,
      password : this.password?.value,
      confirmPassword : this.confirmPassword?.value,
      gender :this.gender?.value,
      age : this.age?.value,
      phoneNo : this.phoneNo?.value,
      address : {
        street : this.street?.value,
        city : this.city?.value,
        state : this.state?.value,
        zipCode : this.zipCode?.value
      }
    });
    this.registrationForm.reset();
    this.registrationForm.valueChanges.subscribe(val => this.registrationForm.markAllAsTouched())
    this.snackbar.open("Registration successful",": )",{duration:2200})

  }

}

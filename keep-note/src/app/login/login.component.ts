import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder, private user : UserService, private router : Router, private loginAuth : LoginAuthService) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    emailId : [""],
    password : [""]
  })
  
  get emailId(){
    return this.loginForm.get("emailId");
  }

  error: boolean = false;

  get password(){
    return this. loginForm.get("password");
  }

  login(){
    // console.log(this.emailId?.value);
    
    // let user = this.user.getUser(this.emailId?.value);
    
    // if (user.length == 0 ){
    //   this.error = true ;
      
    // }else if(this.password == user[0].password){
      
    //   this.router.navigate(["note"]);
    //   this.loginAuth.login();
    // }else{
    //   this.error = true ;
    // }
    let id= "vipulnavale9@gmail.com";
    let pass = "123"
    if(this?.emailId?.value == id  && this.password?.value == pass){
        this.loginAuth.login();
        this.router.navigate(["note"])
    }else{
      alert("user id / password is wrong..please try again");
    }

  }
  
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }
  isLoggedIn:boolean = false;

  login(){
    this.isLoggedIn = true;
  }

  logout(){
    this.isLoggedIn = false ;
  }


}

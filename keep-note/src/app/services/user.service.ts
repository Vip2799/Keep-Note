import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { user } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/users";

  addUser(user: any) {
    return this.http.post(this.url, user).subscribe({
      next: (elem) => console.log(elem),
      error: (elem) => alert("Network issue!! Please try again :(")
    })
  }

  userArr:any = [];

  getUser(email: string | null | undefined) {
    this.http.get(this.url).subscribe({
      next: (obj) => {
        this.userArr = obj
        this.userArr = this.userArr.filter((obj:any) => obj.email == email);
      }
    })
    return this.userArr
    // console.log(this.userArr)
    // return this.userArr.filter((obj:any) => obj.email == email);
  }
}

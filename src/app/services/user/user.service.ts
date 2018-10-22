import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../../signinDataType'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "https://conduit.productionready.io/api/users"
  currentUserUrl = "https://conduit.productionready.io/api/user"
  currentUsername = new Subject<string>()
  constructor(private http: HttpClient) { }
  
  loginUser(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url+"/login",user,httpOptions)
  }

  registerUser(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url,user,httpOptions)
  }

  setUsername(username: string) {
    this.currentUsername.next(username)
  }

  getCurrentUser(){
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': 'Token '+ localStorage.getItem('token')
      })
    };
    return this.http.get(this.currentUserUrl,httpOptions);
  }
  
}

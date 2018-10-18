import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url : 'https://conduit.productionready.io/api/users/login';
  constructor(private http: HttpClient) { }
  
  login(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body = {"user":{"email":"divesh1@try.com","password":"21021996"}};
  }
}

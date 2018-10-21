import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "https://conduit.productionready.io/api/users"
  constructor(private http: HttpClient) { }
  
  loginUser(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url+"/login",user,httpOptions)
  }
}

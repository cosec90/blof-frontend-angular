import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserSignup} from '../model/UserSignup';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  public url = "/api/auth/signup";

  constructor(private http: HttpClient) { }

  signUp(user):Observable<any>{
    
    const header = {'Content-Type':'application/json'}
    return this.http.post(this.url,user,{headers:header});
    
  }
}

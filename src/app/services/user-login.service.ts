import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from 'src/app/model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }
  public url = "/api/auth/";

  login(user_login):Observable<any>{

    const header = {'Content-Type':'application/json'}
    return this.http.post(this.url+'login',user_login,{headers:header})
  }
  getUsername(): Observable<any>{

    return this.http.get(this.url+'getUsername');
  }

}

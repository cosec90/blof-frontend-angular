import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, InteropObservable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  constructor(private http: HttpClient) { }
  public url = "/api/";

  addFollower(us_id: number): Observable<any>{

    return this.http.get(this.url+'addfollower/'+us_id);

  }

  getUserFollower() : Observable<any>{

    return this.http.get(this.url+'getUserFollowers');

  }

  deleteFollower(id: number): Observable<any>{
    
    return this.http.get(this.url+'deleteFollower')

  }

  

}

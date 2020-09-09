import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, InteropObservable } from 'rxjs';
import {map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  public url = "/api/";

  sendProfileData(profile): Observable<any>{

    const header = {'Content-Type':'application/json'};
    return this.http.post(this.url+'addProfile',profile,{headers:header})
  }

  sendProfileImg(file:File): Observable<any>{

    const formdata: FormData = new FormData();
    formdata.append('file' , file);
    return this.http.post(this.url+'uploadProfileImg',formdata);

  }

  updateProfileImg(file: File,id: number): Observable<any>{

    const formdata: FormData = new FormData();
    formdata.append('file' , file);
    return this.http.post(this.url+'updateProfileImg/'+id,formdata);
  }

  updateProfile(profile, id: number): Observable<any>{

    return this.http.post(this.url+'updateProfile/'+id,profile);

  }

  getPostProfile(): Observable<any>{

    return this.http.get(this.url+'getPostProfile');

  }
  
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // private id: number;
  private username: string;

  
  constructor() { }

  getData(name: string){
    this.username = name;
  }

  sendData(): String{
    
    return this.username;
  }

}

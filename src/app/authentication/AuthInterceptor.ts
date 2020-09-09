import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{

    constructor(){

    }
    intercept(req:HttpRequest<any>, next:HttpHandler){
        const token = localStorage.getItem('token');
        if( token !=null) {
          req = req.clone({headers: req.headers.set('Authorization','Bearer '+token)})
    
        }
        return next.handle(req);
      }


}
export const authInterceptroProvider = [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }];
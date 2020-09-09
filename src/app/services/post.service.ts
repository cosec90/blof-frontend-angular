import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public url = '/api/';

  constructor(private http:HttpClient) { }

  sendPost(post): Observable<any>{

    const header = {'Content-Type':'application/json'};
    return this.http.post(this.url+'addPost',post,{headers:header});
  }

  sendPostImg(file:File): Observable<any>{

    const formdata: FormData = new FormData();
    formdata.append('file' , file);
    return this.http.post(this.url+'addPostImg',formdata);

  }
  getPost(): Observable<any>{

    return this.http.get(this.url + 'getPost');
 
  }
  getPostByUser(id: number) : Observable<any>{

    return this.http.get(this.url+'getPostByUser/'+id);
  }

  getRandomPost(): Observable<any>{

    return this.http.get(this.url+'getRandomPosts');
  }
  
  getPostById(id) :Observable<any>{

    return this.http.get(this.url+'getPostId/'+id);
  }

}

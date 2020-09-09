import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public editor: any;
  public dateObj: Date;
  public date : number;
  public month: number;
  public year: number;
  public img : any;
  public dateString: String;
  public postModel: any;

  postForm = new FormGroup({
  title: new FormControl('',[Validators.required]),
  post: new FormControl('',[Validators.required]),
  postImg: new FormControl('',[Validators.required])
  
  });
  constructor(private postService:PostService, private  router:Router) {
    
    
   }

  ngOnInit(): void {
  }

  fileUpload(event){

    this.img =  event.target.files[0];

  }

  postFormSubmit(){

    this.dateObj = new Date();
    this.month = this.dateObj.getMonth() + 1;
    this.date = this.dateObj.getDate();
    this.year = this.dateObj.getFullYear();
    this.dateString = this.year +"-"+ this.month +"-"+ this.date;
    
    this.postModel = new Post();
    this.postModel.pt_post = this.postForm.get('post').value;
    this.postModel.pt_title = this.postForm.get('title').value;
    this.postModel.pt_date = this.dateString;

    console.log(this.postModel);
    
    this.postService.sendPostImg(this.img).subscribe(

      (data) =>{
        this.postModel.pt_date = data.pt_img;
        
      },
      (next) =>{
        this.postService.sendPost(this.postModel).subscribe(
          (data) =>{

          },
          next =>{
            console.log("Inside the next method of sendPost api");
            this.router.navigate(["/post"]);
          }
        )  
      }


    )

  }

}

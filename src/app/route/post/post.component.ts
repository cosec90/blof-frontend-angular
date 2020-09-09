import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/model/Post';
import { UserLogin } from 'src/app/model/UserLogin';
import { UserDataService } from 'src/app/services/user-data.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private userModel = new UserLogin();
  public listPost : any;
  public username : String;
  public topStories: any;
  constructor(private postService: PostService, private userData: UserDataService,private profileService: ProfileService, private router:Router) { 

    
  }

  ngOnInit(): void {
    
    this.username = this.userData.sendData();
    console.log(this.username);
    this.postService.getPost().subscribe(
      (data) =>{
        this.listPost = data;
        console.log(this.listPost);
      }
    )

    this.profileService.getPostProfile().subscribe(

      (data) =>{
        
        console.log(data);
      }

    )
    this.postService.getRandomPost().subscribe(

      (data) =>
      {
        this.topStories = data;
      }

    )

  }

  displayStoriesPost(stories){

  }
  readPost(temp){
    var pt_id = temp.pt_id;
    this.router.navigate(['/singlePost'], { queryParams: { post_id: pt_id } });
  }

}

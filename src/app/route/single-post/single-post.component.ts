import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  public pt_id : number;

  constructor(private postService: PostService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params =>{
        this.pt_id = params['post_id'];
      }
    );
    console.log(this.pt_id);
    this.postService.getPostById(this.pt_id).subscribe(

      (data) => {
        console.log(data);
      }
      

    );
    // this.getPostData();
  }

  getPostData(){
    this.postService.getPostById(this.pt_id).subscribe(

      (data) => {
        console.log(data);
      }
      

    );
  }

}

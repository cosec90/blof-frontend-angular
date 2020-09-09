import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Profile } from 'src/app/model/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public message: String;

  public img: any;

  public response: any;

  public profileModel: any;

  public fileExtension: any;

  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lname: new FormControl('',[Validators.required]),
    insta: new FormControl('',[Validators.required]),
    git: new FormControl('',[Validators.required]),
    bio: new FormControl('',[Validators.required])
    
  });
  constructor(private profileService: ProfileService, private router:Router) { }


  ngOnInit(): void {

    // this.message = this.userData.sendData();

  }
  fileUpload(event){

    var extension_status = 0
    this.img =  event.target.files[0];
    this.fileExtension = this.img.name.split(".").pop();

    let goodExtensions = ['png','PNG','jpg','JPG','jpeg'];

    for(var i=0; i<goodExtensions.length ; i++){
      if(goodExtensions.includes(this.fileExtension)){
        extension_status++;
      }
      else{
        alert("Invalid file extension");

        break;
        this.router.navigate(["/userinfo"]);
      }
    }

    console.log(this.fileExtension);
    
  }
  profileFormSubmit(){
  
    this.profileModel = new Profile();
    this.profileModel.pl_name = this.profileForm.get('name').value;
    this.profileModel.pl_surname = this.profileForm.get('lname').value;
    this.profileModel.pl_bio = this.profileForm.get('bio').value;
    this.profileModel.pl_githubUrl =  this.profileForm.get('git').value;
    this.profileModel.pl_instaUrl =  this.profileForm.get('insta').value;

    this.profileService.sendProfileImg(this.img).subscribe(
      (data) =>{
        this.response = data;
        console.log(this.response);
        this.profileModel.pl_imgUrl = this.response.pl_imgUrl;
        
        //assign img url ;
        this.profileService.sendProfileData(this.profileModel).subscribe(
          (data) =>{
            this.response = data;
          }
        )
      }

    )       
  }

}

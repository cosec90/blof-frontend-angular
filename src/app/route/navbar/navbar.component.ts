import { Component, OnInit, NgZone } from '@angular/core';
import {  FormGroup, Validators, FormControl }  from '@angular/forms';
import { UserSignup } from 'src/app/model/UserSignup';
import { UserSignupService } from 'src/app/services/user-signup.service';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/UserLogin';
import { UserLoginService } from 'src/app/services/user-login.service';
import { UserDataService } from 'src/app/services/user-data.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public display = 'close';
  public signupOpen = 'close';
  public loginOpen = "open";

  public signup_username: string;
  public signup_email: string;
  public signup_password: string;

  

  public userData: any;

  public userSignup : any;
  signupForm = new FormGroup({
    signup_email: new FormControl('',Validators.required),
    signup_username: new FormControl('',Validators.required),
    signup_password: new FormControl('',Validators.required)

  });

  public userLogin: any;
  loginForm = new FormGroup({
    login_username: new FormControl('',Validators.required),
    login_password: new FormControl('',Validators.required)

  });

  constructor(private signUpService: UserSignupService,private loginService: UserLoginService ,private zone: NgZone, private  router:Router, private userDataService: UserDataService) { }

  ngOnInit(): void {
  }
  signUp(){

    // this.signup_email = this.signupForm.get('signup_email').value;
    // this.signup_username = this.signupForm.get('signup_username').value;
    // this.signup_password = this.signupForm.get('signup_password').value;

    // this.userSignup =  new UserSignup();
    // this.userSignup.us_username = this.signup_username ;
    // this.userSignup.us_password = this.signup_password ;
    // this.userSignup.us_email = this.signup_email  ;
    

    // console.log(this.userSignup);
    // this.signUpService.signUp(this.userSignup).subscribe((data) => {
      
    // }
    // );
    this.router.navigate(['/landing']);

  }

  login(){

    this.userLogin = new UserLogin();

    this.userLogin.username = this.loginForm.get('login_username').value;
    this.userLogin.password = this.loginForm.get('login_password').value;

      //using zone
      this.loginService.login(this.userLogin).subscribe(
        (data) =>{
          this.zone.run(() =>{
            this.userData = data;
            if(this.userData != null){
              console.log(this.userData.us_username);
              this.userDataService.getData(this.userData.us_username);
              this.display = 'close';
              localStorage.setItem('token',this.userData.token);
              this.router.navigate(["/post"]);
            }
            else{
              alert("Invalid username or password");
               
            }
          })
          
        }
        );

        

  }


  closeModel(){
    this.display =  'close';
  }
  openModel(){
    this.display = 'open';
  }
  openLogin(){
    this.signupOpen = 'close';
    this.loginOpen = 'open';
  }
  openSignup(){
    this.signupOpen = 'open';
    this.loginOpen = 'close';
  }



}

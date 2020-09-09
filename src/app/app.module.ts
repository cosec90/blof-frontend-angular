import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LandingPageComponent } from './route/landing-page/landing-page.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './route/navbar/navbar.component';
import {authInterceptroProvider} from './authentication/AuthInterceptor';
import { FormsModule }  from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { UserInfoComponent } from './route/user-info/user-info.component';
import { PostComponent } from './route/post/post.component';
import { AddPostComponent } from './route/add-post/add-post.component';
import { UserProfileComponent } from './route/user-profile/user-profile.component';
import { SinglePostComponent } from './route/single-post/single-post.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    UserInfoComponent,
    PostComponent,
    AddPostComponent,
    UserProfileComponent,
    SinglePostComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
    
  ],
  providers: [authInterceptroProvider],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

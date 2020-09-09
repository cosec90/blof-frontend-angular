import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from './route/landing-page/landing-page.component';
import { UserInfoComponent } from './route/user-info/user-info.component';
import { PostComponent } from './route/post/post.component';
import { AddPostComponent } from './route/add-post/add-post.component';
import { UserProfileComponent } from './route/user-profile/user-profile.component';
import { SinglePostComponent } from './route/single-post/single-post.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'userinfo', component: UserInfoComponent},
  {path: 'createPost', component: AddPostComponent},
  {path: 'post', component: PostComponent},
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'singlePost', component: SinglePostComponent},
  {path: 'landing', component: LandingPageComponent}
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
export const routingComponents = [LandingPageComponent, UserInfoComponent,PostComponent,AddPostComponent, UserProfileComponent, SinglePostComponent];
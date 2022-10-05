import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PostsComponent } from './home/posts/posts.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { MypostsComponent } from './my-profile/myposts/myposts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FriendsComponent,
    MyProfileComponent,
    PostsComponent,
    FriendsListComponent,
    MypostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

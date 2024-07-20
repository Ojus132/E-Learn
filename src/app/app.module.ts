import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseElementComponent } from './course-element/course-element.component';
import { CourseUIComponent } from './course-ui/course-ui.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    ProfileComponent,
    CoursesComponent,
    CourseElementComponent,
    CourseUIComponent,
    SideNavComponent,
    VideoSectionComponent,
    DiscussionForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

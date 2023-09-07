import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { CoursesService } from './Service/courses.service';
import { OneCourseComponent } from './course/one-course/one-course.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Courses', component: CourseComponent },
  { path: 'Courses/Course/:id', component: OneCourseComponent },
  { path: '**', component: ErrorComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    ErrorComponent,
    OneCourseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

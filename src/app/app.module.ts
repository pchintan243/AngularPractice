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
import { FormsModule } from '@angular/forms';
import { canActiveGuard } from './Guard/can-active.guard';
import { canActiveChildGuard } from './Guard/can-active-child.guard';
import { canDeActivateGuard } from './Guard/can-de-activate.guard';

const appRoute: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  {
    path: 'Contact',
    component: ContactComponent,
    canDeactivate: [canDeActivateGuard]
  },
  { path: 'About', component: AboutComponent, canActivate: [canActiveGuard] },
  // { path: 'Courses', component: CourseComponent, canActivate: [canActiveGuard] },
  { path: 'Courses/Course/:id', component: OneCourseComponent },
  // Example of child/nested routes
  // You can add multiple child routes inside the routes.
  // Also you want to add router-outlet in one-course component
  {
    path: 'Courses',
    component: CourseComponent,
    canActivateChild: [canActiveChildGuard],
    children: [
      { path: 'Course/:id', component: OneCourseComponent }
    ]
  },
  { path: '**', component: ErrorComponent },

  // canMatch guard is use for when more than one path name are same & we want to invoke the component based on the condition.
  // Make sure your highest priority component write first
]
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    ErrorComponent,
    OneCourseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

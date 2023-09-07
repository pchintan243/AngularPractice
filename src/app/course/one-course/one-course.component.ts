import { CoursesService } from './../../Service/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-course',
  templateUrl: './one-course.component.html',
  styleUrls: ['./one-course.component.css']
})
export class OneCourseComponent implements OnInit, OnDestroy {
  course: any;
  courseId: any;
  routeParams: any;
  editMode: boolean = false;

  constructor(private ActivatedRoute: ActivatedRoute, private CoursesService: CoursesService) { }

  ngOnInit(): void {
    // To get the id we use snapshot property it retuns the id.
    // this.courseId = this.ActivatedRoute.snapshot.params['id'];
    // --> this works same as above one.
    // this.courseId = this.ActivatedRoute.snapshot.paramMap.get('id');
    // Make sure you use snapshot property when value must not be changed after invoke first time.

    // Based on id we get the course details from an course service file.
    // this.course = this.CoursesService.courses.find(x => x.id == this.courseId);

    // let's do it using ovservable 
    // observable is useful for if we route inside the route.
    this.routeParams = this.ActivatedRoute.paramMap.subscribe((val) => {
      this.courseId = val.get('id')
      this.course = this.CoursesService.courses.find(x => x.id == this.courseId);
    })

    this.ActivatedRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('editMode'));
    })
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }
}

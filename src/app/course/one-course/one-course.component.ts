import { CoursesService } from './../../Service/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-course',
  templateUrl: './one-course.component.html',
  styleUrls: ['./one-course.component.css']
})
export class OneCourseComponent implements OnInit {
  course: any;
  courseId: any;

  constructor(private ActivatedRoute: ActivatedRoute, private CoursesService: CoursesService) { }

  ngOnInit(): void {
    // To get the id we use snapshot property it retuns the id.
    // this.courseId = this.ActivatedRoute.snapshot.params['id'];
    // --> this works same as above one.
    this.courseId = this.ActivatedRoute.snapshot.paramMap.get('id');

    // Based on id we get the course details from an course service file.
    this.course = this.CoursesService.courses.find(x => x.id == this.courseId);
  }
}

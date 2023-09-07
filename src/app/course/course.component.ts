import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Service/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: {
    id: number,
    course_name: string,
    author: string,
    price: number,
    duration: string,
    type: string,
    ratings: number,
    image: string,
    description: string
  }[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.coursesService.courses;
  }
}

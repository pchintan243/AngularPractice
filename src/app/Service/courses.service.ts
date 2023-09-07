import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = [
    {
      id: 1,
      course_name: "Python for Beginners",
      author: "John Smith",
      price: 49.99,
      duration: "8 weeks",
      type: "Premium",
      ratings: 4.5,
      image: "https://assets.rbl.ms/33364099/origin.jpg",
      description: "Learn the fundamentals of Python programming in this comprehensive Free course. Suitable for beginners."
    },
    {
      id: 2,
      course_name: "JavaScript Web Development",
      author: "Emily Johnson",
      price: 59.99,
      duration: "10 weeks",
      type: "Free",
      ratings: 4.2,
      image: "https://t4.ftcdn.net/jpg/02/66/76/83/360_F_266768305_jxxjP3ivAYLHxbOejYQ4095SvaGfTjc3.jpg",
      description: "Master JavaScript and build interactive web applications with hands-on projects and tutorials."
    },
    {
      id: 3,
      course_name: "Java Programming Advanced",
      author: "David Williams",
      price: 79.99,
      duration: "12 weeks",
      type: "Premium",
      ratings: 4.7,
      image: "https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png",
      description: "Take your Java skills to the next level with advanced topics and real-world application development."
    },
    {
      id: 4,
      course_name: "C++ Programming Fundamentals",
      author: "Sarah Davis",
      price: 54.99,
      duration: "9 weeks",
      type: "Premium",
      ratings: 4.3,
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg",
      description: "Get a strong foundation in C++ programming and learn essential concepts for software development."
    },
    {
      id: 5,
      course_name: "Ruby on Rails Web Development",
      author: "Michael Carter",
      price: 69.99,
      duration: "11 weeks",
      type: "Premium",
      ratings: 4.6,
      image: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/eb9e3b7dab09358e7cf13f188f64f9f4.png",
      description: "Build web applications quickly with Ruby on Rails and deploy your projects with ease."
    },
    {
      id: 6,
      course_name: "Data Science with Python",
      author: "Linda Thompson",
      price: 64.99,
      duration: "10 weeks",
      type: "Free",
      ratings: 4.4,
      image: "https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg",
      description: "Explore data analysis, machine learning, and data visualization using Python in this comprehensive course."
    },
    {
      id: 7,
      course_name: "Android App Development",
      author: "Alex Turner",
      price: 59.99,
      duration: "8 weeks",
      type: "Free",
      ratings: 4.2,
      image: "https://1.bp.blogspot.com/-b6bxqJmHSBQ/YCF7iAb1e8I/AAAAAAAAQD4/bjVGymoEwg4HKkjQI04cj9LyYnHS4LhdQCLcBGAsYHQ/s0/new-curriculum-for-android-educators-social-v4.png",
      description: "Learn to develop Android apps from scratch and publish them on the Google Play Store."
    },
    {
      id: 8,
      course_name: "Node.js and Express.js Fundamentals",
      author: "Sophia Garcia",
      price: 49.99,
      duration: "7 weeks",
      type: "Premium",
      ratings: 4.5,
      image: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      description: "Master server-side web development with Node.js and Express.js in this practical course."
    },
    {
      id: 9,
      course_name: "SQL Database Design and Management",
      author: "Robert Miller",
      price: 54.99,
      duration: "8 weeks",
      type: "Premium",
      ratings: 4.3,
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/SQL_2019_Webpage_illustration_RE4r3wO:VP1-539x400?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=75",
      description: "Learn to design, create, and manage SQL databases for efficient data storage and retrieval."
    },
    {
      id: 10,
      course_name: "React.js Frontend Development",
      author: "Olivia Adams",
      price: 69.99,
      duration: "9 weeks",
      type: "Premium",
      ratings: 4.6,
      image: "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
      description: "Build modern and responsive web applications with React.js and enhance your frontend development skills."
    }
  ]
  constructor() { }
}

import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private api:ApiService) { }
valueRead=()=>
{let data={
  "courseTitle":this.courseTitle,
  "courseDescription":this.courseDescription,
  "courseDuration":this.courseDuration,
  "courseDate":this.courseDate,
  "courseVenue":this.courseVenue
  
}
  console.log("hello")
this.api.insertCourses(data).subscribe(
  (response)=>
  {
    console.log(response)
  }
)

}
courseDate=""
courseDescription=""
courseDuration=""
courseTitle=""
courseVenue=""
  ngOnInit(): void {
  }

}

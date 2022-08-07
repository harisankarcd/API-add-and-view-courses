import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewcourses().subscribe(
      (response)=>
      {
        this.data=response
      }
    )
   }
data:any=[]

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }

  viewcourses=()=>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
insertCourses=(datatosend:any)=>
{
  return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",datatosend)
}
}

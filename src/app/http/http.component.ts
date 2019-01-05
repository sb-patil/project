import { Component } from '@angular/core';
import { HttpService } from '../http/http.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  constructor(private Http:HttpService){
    this.Http.getalldata().subscribe(d=>{
      console.log(d)
    })
  }

  
}

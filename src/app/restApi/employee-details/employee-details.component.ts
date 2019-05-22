import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RestApiService } from 'src/app/servics/rest-api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  activeId:any
  activeEmployee:any
  
  constructor(private activeRoute:ActivatedRoute,private restapi:RestApiService) { }

  ngOnInit() {
    console.log(this.activeRoute)
    this.activeId=this.activeRoute.snapshot.params.id
    this.restapi.getEmployeeByID(this.activeId).subscribe((data)=>{
      console.log(data)
      //this.employee= data

    },function(error){

    })
  }

}

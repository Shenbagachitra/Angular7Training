import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/servics/rest-api.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private restapi:RestApiService) { }
  employee:any=[]
  newEmp:any

  // getAllUsers(){
  //   this.restapi.getRemoteUsers().subscribe((data)=>{
  //     console.log(data)
  //     this.employee= data

  //   },function(error){

  //   })
  // }
  
  createEmployee=function(hf){

    console.log(hf.value)
    
    this.newEmp = JSON.stringify(hf.value)

    this.restapi.createEmployee(this.newEmp).subscribe((response)=>{
      console.log(response)
    })

    //this.getAllUsers()

  }

  ngOnInit() {
  }

}

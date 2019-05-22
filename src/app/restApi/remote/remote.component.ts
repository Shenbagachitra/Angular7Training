import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/servics/rest-api.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  employee:any=[]
  newEmp:any
  constructor(private restapi:RestApiService, private myrouter:Router) { }

  getAllUsers(){
    this.restapi.getRemoteUsers().subscribe((data)=>{
      console.log(data)
      this.employee= data

    },function(error){

    })
  }

  getEmployeeDetails = function(id)
  {
    console.log(id)
    this.myrouter.navigate(['/remote',id])

    /*this.restapi.getEmployeeByID(id).subscribe((response)=>{
      console.log(response)
      
    })*/
  }

  deleteEmployee = function(id)
  {
    console.log(id)
    this.restapi.deleteEmployeeById(id).subscribe((response)=>{
      console.log(response)
      this.message = response.success.text
      this.getAllUsers()
    })
  }

  addEmployee=function(){
    this.newEmp = {      
      "name": "Katiewww", 
      "salary": "45454", 
      "age": "17"      
    }

    this.restapi.createEmployee(this.newEmp).subscribe((response)=>{
      console.log(response)
    })

    this.getAllUsers()

  }



  ngOnInit() {
     this.getAllUsers()     
  }

  

}

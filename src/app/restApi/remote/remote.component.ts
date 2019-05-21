import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/servics/rest-api.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  users:any=[]
  constructor(private restapi:RestApiService) { }

  getAllUsers(){
    this.restapi.getRemoteUsers().subscribe((data)=>{
      console.log(data)
      this.users= data

    },function(error){

    })
  }

  ngOnInit() {
     this.getAllUsers()
  }

  

}

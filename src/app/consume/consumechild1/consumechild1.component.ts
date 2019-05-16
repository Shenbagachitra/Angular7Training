import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/servics/local.service';

@Component({
  selector: 'app-consumechild1',
  templateUrl: './consumechild1.component.html',
  styleUrls: ['./consumechild1.component.css']
})
export class Consumechild1Component implements OnInit {

  allbanks:any
  constructor(private local:LocalService) { }

  ngOnInit() {
      this.accessLocalService();
  }

  accessLocalService=function(){
    console.log(this.local.addbank())
    this.allbanks =  this.local.addbank()
  }

}

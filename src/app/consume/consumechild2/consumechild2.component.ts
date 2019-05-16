import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/servics/local.service';

@Component({
  selector: 'app-consumechild2',
  templateUrl: './consumechild2.component.html',
  styleUrls: ['./consumechild2.component.css']
})
export class Consumechild2Component implements OnInit {

  allbanks:any
  constructor(private local:LocalService) {

   }

  ngOnInit() {
    
    this.allbanks= this.local.addbank()
   }

}

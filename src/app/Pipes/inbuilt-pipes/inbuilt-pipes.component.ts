import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrls: ['./inbuilt-pipes.component.css']
})
export class InbuiltPipesComponent implements OnInit {
  money=88
  name='venkatesh'
  birthday=new Date()
  constructor() { }

  ngOnInit() {
  }

}

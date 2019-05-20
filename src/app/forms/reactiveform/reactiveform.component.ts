import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myForm:any

  constructor() { }

   ngOnInit() {
     this.myForm = new FormGroup({
       fn:new FormControl("Chitra",Validators.compose([
         Validators.required,
         Validators.minLength(3),
         Validators.pattern("^[a-zA-Z]+$")
       ])),
      //  score:new FormControl("",Validators.compose([
      //    Validators.min(10),
      //    Validators.required
      //  ])),
      score:new FormControl("",this.scoreValidator),
      hobby:new FormControl("")

     })
  } 

  submitForm=function(reactiveForm){
    console.log(reactiveForm)
    console.log(reactiveForm.value)
  }

  scoreValidator = function(control){
    console.log(control)
    if(control.value < 10){
      return {'score':true}
    }
    //return {'score':true}
  }

}

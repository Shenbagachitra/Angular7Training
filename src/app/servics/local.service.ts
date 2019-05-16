import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  myPI=3.14;
  bank=["wew","wew","wew"]

  displaybank()
  {
    console.log(this.bank)
  }

  addbank(){
    this.bank.push("dfd")
  }

  constructor() { }
}

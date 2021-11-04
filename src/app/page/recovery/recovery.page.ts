import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {

  user = {
    email:'',
  }

  constructor() { }

  ngOnInit() {
  } 

  onKeyUpEmail(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9@,._*-]+$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }
 
  async onSubmit(_form: NgForm) {
    alert("El correo de recuperacion fue enviado a: " + this.user.email);
  } 

}

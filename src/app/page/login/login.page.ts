import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  ngOnInit() {
  }
  
  user = {
    usuario:'',
    password:'',
  }

  constructor() {}

  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
 
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
 
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }

  async onSubmit(_form: NgForm) {
    console.log(this.user);

    alert(this.user.usuario + '_' + this.user.password)
  } 

}

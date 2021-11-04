import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    usuario:'',
    password:'',
    flag: false,
  }

  constructor(private router:Router) {}
  
  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
 
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
 
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }



  onKeyUpPass(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9*#&$%]*$');
    
    if(!regExp.test(newValue)){
      
      event.target.value = newValue.slice(0, -1);
      
    }
    let password = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*#&$%])");
    if(!password.test(this.user.password)){
      this.user.flag = false
      
    }else{
      this.user.flag = true
    }
  }
  
  async onSubmit(_form: NgForm) {
    console.log(this.user);
    if(this.user.usuario.length<8 || this.user.password.length<8){
      alert("Requisitos no cumplidos")
      
    }else{
      alert(this.user.usuario + ' : ' + this.user.password)
      this.router.navigate(['/dashboard']);

    }

  } 

}

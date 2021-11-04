import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    usuario:'',
    password:'',
    apellido: '',
    email:'',
    passwordConf:'',
    flagUsuario: false,
    flagPass: false,
    flagPassConf: false,
  }
  

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
    let usuarios = new RegExp("^[A-Za-z0-9]*$");
    if(!usuarios.test(this.user.usuario)){
      
      this.user.flagUsuario = false;
    }else{
      
      this.user.flagUsuario = true;
    }
  }

  // onKeyUpApellido(event: any){
  //   let newValue = event.target.value;
  //   console.log(newValue);
 
  //   let regExp = new RegExp('^[A-Za-z0-9? ]+$');
 
  //   if(!regExp.test(newValue)){
  //     event.target.value = newValue.slice(0, -1);
  //   }
  // }

  onKeyUpPass(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9*#&$%]*$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }

    let password = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*#&$%])");

    if(event.target.name=="password"){
      if(!password.test(this.user.password)){
        this.user.flagPass = false;
      }else{
        this.user.flagPass = true;
      }
    }
    if(event.target.name=="passwordConf"){
      if(!password.test(this.user.passwordConf)){
        this.user.flagPassConf = false;
      }else{
        this.user.flagPassConf = true;
      }
    }
    
  }



  onKeyUpEmail(event: any){
    let newValueEmail = event.target.value;
    //console.log(newValueEmail);
 
    let regExpEmail = new RegExp('^[A-Za-z0-9@,._*-]+$');
 
    if(!regExpEmail.test(newValueEmail)){
      event.target.value = newValueEmail.slice(0, -1);
    }
  }

  async onSubmit(_form: NgForm) {
    console.log(this.user);
    alert(this.user.usuario + '_' + this.user.email);
    if(this.user.passwordConf != this.user.password){
      alert("Las contraseñas deben de coincidir");
    }
    else{
      alert("Registrado con exito");
    }
  } 


}
